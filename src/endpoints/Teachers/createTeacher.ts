import { Request, Response } from "express"
import connection from "../../data/connection"
import { formatDate } from "../../data/FormatDate"
import { TeacherCons, Teacher, TeacherEsp } from "../../data/types"

export default async function createTeacher(
   req: Request,
   res: Response
) : Promise<void> {

    try {
        
        const { nome, email, data_nasc, especialidades, turma_id } = req.body

        if (!nome || !email || !data_nasc || !especialidades || !turma_id) {
            throw new Error("Campos requeridos: 'nome', 'email', 'data_nasc', 'especialidades', 'turma_id'")
        }

        const birthDateFormat = formatDate(data_nasc)
        if (!birthDateFormat) throw new Error("O 'data_nasc' deve estar no formato 'dd/mm/aaaa'.")

        const [alreadyTeacher] = await connection("DOCENTE")
            .where({ email })

        if (alreadyTeacher) {
            throw new Error("Esse email já foi cadastrado, favor inserir outro.")
        }

        const IDTeacher = Date.now().toString()
        const newTeacher = new TeacherCons(IDTeacher, nome, email, birthDateFormat, turma_id, especialidades)

        const teacherTable: Teacher = {
            id: newTeacher.getId(),
            nome: newTeacher.getName(),
            email: newTeacher.getEmail(),
            data_nasc: newTeacher.getBirthDate(),
            turma_id: newTeacher.getClassId()
        }

        await connection("DOCENTE").insert(teacherTable)


        for (let especialidade of especialidades) {
            let especialidadeId

            const [alreadySpecialty] = await connection("ESPECIALIDADE")
                .where({ nome: especialidade })

            if (!alreadySpecialty) {
                throw new Error("Campo inválido: 'especialidades' (valor diferente entre as 5 possíveis)")
            }

            especialidadeId = alreadySpecialty.id
            
            const teacherSpecialty: TeacherEsp = {
                id: Date.now().toString(),
                docente_id: IDTeacher,
                especialidade_id: especialidadeId
            }

            await connection("DOCENTE_ESPECIALIDADE").insert(teacherSpecialty)
        }

        res.send({ message: "Docente cadastrado com sucesso!", newTeacher })
    } catch (error: any) {
        res.send(error.message)
    }
}