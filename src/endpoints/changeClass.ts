import { Request, Response } from "express"
import connection from "../connection"
import  getAllClasses  from "./getAllClasses"

export default async function updateClass(
    req: Request,
    res: Response
 ) : Promise<any> {
 
    try {
       const id = req.params.id as any
       const { modulo } = req.body 
       const getClass = await getAllClasses(id, modulo)

       await updateNow(id, modulo)
 
       res
          .status(200)
          .end()
    } catch (error) {
       res
          .status(500)
          .end()
    }
 }
 

 const updateNow = async (id: string, modulo: string) => {
    const result = await connection("TURMA")
      .update({ modulo: modulo })
      .where("id", id)
  
    return result
  }