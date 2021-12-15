import { Request, Response } from "express"
import connection from "../../data/connection"

export default async function updateClass(
    req: Request,
    res: Response
 ) : Promise<any> {

    try {
        const { turma_id } = req.body
        const { id } = req.params

        if (!turma_id) throw new Error("Campo requerido: 'turma_id'")
        if (!id) throw new Error("Param requerido: id")

        const [alreadyTeacher] = await connection("DOCENTE")
            .where({ id })

        if (!alreadyTeacher) {
            throw new Error("Param inválido: 'id' (não encontrado)")
        }

        const [alreadyClass] = await connection("TURMA")
            .where({ id: turma_id })

        if (!alreadyClass) {
            throw new Error("Campo inválido: 'turma_id' (não encontrado)")
        }

        await connection("DOCENTE")
            .update({ turma_id })
            .where({ id })

        res.send({ message: "Turma de docente atualizada com sucesso" })
    } catch (error: any) {
        res.send(error.message)
    }
}