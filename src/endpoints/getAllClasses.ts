import { Request, Response } from "express"
import connection from "../connection"
import { classes } from "../types"

export default async function getAllClasses(
   req: Request,
   res: Response
) : Promise<void> {

   try {
      
      const arrayOfClasses: classes[] = await connection("TURMA").select()

      res
         .send(arrayOfClasses)
   } catch (error) {
      res
         .status(500)
         .send("Ocorreu um erro!")
   }
}
