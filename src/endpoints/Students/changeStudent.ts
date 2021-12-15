import { Request, Response } from "express"
import connection from "../../data/connection"

export default async function changeStudent(
   req: Request,
   res: Response
) : Promise<void> {

    try {
        const { turma_id } = req.body
        const { id } = req.params

        if (!turma_id) throw new Error("O 'turma_id' é obrigatório.")
        if (!id) throw new Error("O ID é obrigatório.")

        const [alreadyStudent] = await connection("ESTUDANTE")
            .where({ id })

        if (!alreadyStudent) {
            throw new Error("ID não encontrado, tente novamente.")
        }

        const [alreadyClass] = await connection("TURMA")
            .where({ id: turma_id })

        if (!alreadyClass) {
            throw new Error("O 'turma_id' que você digitou não foi encontrado, tente novamente.")
        }

        await connection("ESTUDANTE")
            .update({ turma_id })
            .where({ id })

        res.send({ message: "A turma do estudante foi atualizada com sucesso!" })
    } catch (error: any) {
        res.send(error.message)
    }
}