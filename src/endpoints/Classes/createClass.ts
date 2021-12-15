import { Request, Response } from "express"
import connection from "../../data/connection"
import { ClassesCons, Student, Teacher, Classes } from "../../data/types"

export default async function createClass(
   req: Request,
   res: Response
) : Promise<void> {

   try {
        
      const { nome } = req.body

      if (!nome) throw new Error("O 'nome' é obrigatório.")

      const [alreadyClassName] = await connection("TURMA")
          .where({ nome })

      if (alreadyClassName) {
          throw new Error("E-mail já cadastrado, favor inserir outro.")
      }

      const id = Date.now().toString()
      const modulo = 0
      const estudantes: Student[] = []
      const docentes: Teacher[] = []

      const turma = new ClassesCons(id, nome, modulo, estudantes, docentes)

      const classTable: Classes = {
          id: turma.getId(),
          nome: turma.getName(),
          modulo: turma.getModule()
      }

      await connection("TURMA").insert(classTable)

      res.send({ message: "Turma criada com sucesso!", turma })
  } catch (error: any) {
      res.send(error.message)
  }
}
