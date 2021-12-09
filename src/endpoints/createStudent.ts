import { Request, Response } from "express"
import connection from "../connection"
import { StudentDatabase } from "../data/StudentDatabase"
import { Student } from "../types"

export default async function createStudent(
   req: Request,
   res: Response
) : Promise<void> {

   try {
      const { nome, email, data_nasc, turma_id, hobbies } = req.body
      const cdb = new StudentDatabase()
      const characterToBeCreated = new Student(nome, email, data_nasc, turma_id, hobbies)

      await cdb.create(characterToBeCreated);

      res
         .status(201)
         .end()
   } catch (error) {
      res
         .status(500)
         .end()
   }
}
