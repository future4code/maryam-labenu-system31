import { Request, Response } from "express"
import connection from "../../data/connection"
import { formatDate } from "../../data/FormatDate"
import { Student, StudentCons, Hobbies, StudentHobb } from "../../data/types"

export default async function createStudent(
   req: Request,
   res: Response
) : Promise<void> {

    try {
        
        const { nome, email, data_nasc, hobbies, turma_id } = req.body
        if (!nome || !email || !data_nasc || !hobbies || !turma_id) {
            throw new Error("Campos requeridos: 'nome', 'email', 'data_nasc', 'hobbies', 'turma_id'")
        }

        const birthDateFormat = formatDate(data_nasc)
        if (!birthDateFormat) throw new Error("O 'data_nasc' precisa estar no formato 'dd/mm/aaaa').")

        const [alreadyStudent] = await connection("ESTUDANTE")
            .where({ email })

        if (alreadyStudent) {
            throw new Error("E-mail já cadastrado, favor inserir outro.")
        }

        const IDStudent = Date.now().toString()
        const newStudent = new StudentCons (IDStudent, nome, email, birthDateFormat, turma_id, hobbies)

        const studentTable: Student = {
            id: newStudent.getId(),
            nome: newStudent.getName(),
            email: newStudent.getEmail(),
            data_nasc: newStudent.getBirthDate(),
            turma_id: newStudent.getClassId()
        }

        await connection("ESTUDANTE").insert(studentTable)

        for (let hobbie of hobbies) {
            let hobbieId
            const [alreadyHobby] = await connection("HOBBY")
                .where({ nome: hobbie })

            if (alreadyHobby) {
                hobbieId = alreadyHobby.id
            } else {
                hobbieId = Date.now().toString()
                const novoHobbie: Hobbies = {
                    id: hobbieId,
                    nome: hobbie
                }
                await connection("HOBBY").insert(novoHobbie)
            }

            const estudanteHobbie: StudentHobb = {
                id: Date.now().toString(),
                estudante_id: IDStudent,
                hobbie_id: hobbieId
            }

            await connection("ESTUDANTE_HOBBY").insert(estudanteHobbie)
        }

        res.send({ message: "Estudante cadastrado com sucesso!", newStudent })
    } catch (error: any) {
        res.send(error.message)
    }
}