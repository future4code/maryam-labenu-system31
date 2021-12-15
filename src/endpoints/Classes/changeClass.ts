import { Request, Response } from "express"
import connection from "../../data/connection"

export default async function updateClass(
    req: Request,
    res: Response
 ) : Promise<any> {
 
   try {
      const { modulo } = req.body
      const { id } = req.params

      if (!id) throw new Error("Digite o ID para prosseguir.")
      if (typeof modulo !== "number") throw new Error("O módulo precisa ser um número.")
      if (modulo < 0 || modulo > 6) throw new Error("O módulo precisa ser um número entre 0 e 6.")

      const [alreadyClass] = await connection("TURMA")
          .where({ id })

      if (!alreadyClass) {
          throw new Error("ID não encontrado, tente novamente.")
      }

      await connection("TURMA")
          .update({ modulo: Number(modulo) })
          .where({ id })

      res.send({ message: "O módulo foi atualizado com sucesso!" })
  } catch (error: any) {
      res.send(error.message)
  }
}