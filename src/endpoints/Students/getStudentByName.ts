import { Request, Response } from "express"
import connection from "../../data/connection"
import { Classes, Student } from "../../data/types"

export default async function getStudentByName(
   req: Request,
   res: Response
) : Promise<void> {

   try {
      const { nome } = req.query

      const result = await connection("ESTUDANTE")
          .where("nome", "like", `%${nome}%`)

      res.send({ result })
  } catch (error: any) {
      res.send(error.message)
  }
}
