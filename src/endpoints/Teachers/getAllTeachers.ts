import { Request, Response } from "express"
import connection from "../../data/connection"
import { Teacher } from "../../data/types"

export default async function getAllTeachers(
   req: Request,
   res: Response
) : Promise<void> {

   try {
      
      const arrayOfTeachers: Teacher[] = await connection("DOCENTE").select()

      res
         .send(arrayOfTeachers)
   } catch (error) {
      res
         .status(500)
         .send("Ocorreu um erro!")
   }
}
