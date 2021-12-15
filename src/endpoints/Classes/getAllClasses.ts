import { Request, Response } from "express"
import connection from "../../data/connection"
import { Classes } from "../../data/types"

export default async function getAllClasses(
   req: Request,
   res: Response
) : Promise<void> {

   try {
      
      const arrayOfClasses: Classes[] = await connection("TURMA").select()

      res
         .send(arrayOfClasses)
   } catch (error) {
      res
         .status(500)
         .send("Ocorreu um erro!")
   }
}
