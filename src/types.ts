export type student = {
   id: string,
   nome: string,
   email: string,
   data_nasc: Date,
   turma_id: string,
   hobbies: string
}

export type teacher = {
   id: string,
   nome: string,
   email: string,
   data_nasc: Date,
   turma_id: string,
   especialidades: string
}

export type classes = {
   id: string,
   nome: string,
   docentes: string,
   estudantes: string,
   modulo: 0
}

export class Student {

   private nome: string
   private email: string
   private data_nasc: Date
   turma_id: string
   private hobbies: string

   constructor(
      nome: string,
      email: string,
      data_nasc: Date,
      turma_id: string,
      hobbies: string
   ) {
      this.nome = nome
      this.email = email
      this.data_nasc = data_nasc
      this.turma_id = turma_id
      this.hobbies = hobbies
   }

   getName(): string {
      return this.nome
   }

   getEmail(): string {
      return this.email
   }

   getBirthDate(): Date {
      return this.data_nasc
   }

   getClassId(): string {
      return this.turma_id
   }

   getHobbies(): string {
      return this.hobbies
   }

   
}