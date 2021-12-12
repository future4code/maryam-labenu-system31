import { Request, Response } from "express"
import connection from "../connection"
import { ClassDatabase } from "../data/ClassDatabase"
import { Classes } from "../types"

export default async function createClass(
   req: Request,
   res: Response
) : Promise<void> {

   try {
      const { nome, modulo } = req.body
      const newClass = new ClassDatabase()
      const classToBeCreated = new Classes(nome, modulo)

      await newClass.create(classToBeCreated)

      res
         .status(201)
         .end()
   } catch (error) {
      res
         .status(500)
         .end()
   }
}
