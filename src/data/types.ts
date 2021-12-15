// Turmas
export type Classes = {
   id: string,
   nome: string,
   modulo: Number,
}

// Estudantes
export type Student = {
   id: string,
   nome: string,
   email: string,
   data_nasc: string,
   turma_id: string
}

// Docentes
export type Teacher = {
   id: string,
   nome: string,
   email: string,
   data_nasc: string,
   turma_id: string
}

// Hobbies
export type Hobbies = {
   id: string,
   nome: string
}

// Especialidades dos docentes 
export type TeacherEsp = {
   id: string,
   docente_id: string,
   especialidade_id: string
}

// Hobbies dos estudantes
export type StudentHobb = {
   id: string,
   estudante_id: string,
   hobbie_id: string
}

// Especialidades (enum)
export enum ESPECIALIDADES {
    JS = "JS",
    CSS = "CSS",
    REACT = "React",
    TYPESCRIPT = "Typescript",
    POO = "POO"
}



// ---- CONSTRUCTOR ----



// User geral
export class User {
   constructor(
       protected id: string,
       protected nome: string,
       protected email: string,
       protected data_nasc: string,
       protected turma_id: string
   ) {}

   getId() {
       return this.id
   }

   getName() {
       return this.nome
   }

   getEmail() {
       return this.email
   }

   getBirthDate() {
       return this.data_nasc
   }

   getClassId() {
       return this.turma_id
   }
}


// Turmas
export class ClassesCons {
   constructor(
       private id: string,
       private nome: string,
       private modulo: number,
       private estudantes: Student[],
       private docentes: Teacher[]
   ) 
   {}

   getId() {
       return this.id
   }

   getName() {
       return this.nome
   }

   getModule() {
       return this.modulo
   }

   getStudents() {
       return this.estudantes
   }

   getTeachers() {
       return this.docentes
   }
}


// Estudantes
export class StudentCons extends User {
   constructor(
       id: string,
       nome: string,
       email: string,
       data_nasc: string,
       turma_id: string,
       private hobbies: string[]
   ) {
       super(
           id,
           nome,
           email,
           data_nasc,
           turma_id
       )
   }

   getHobbies() {
       return this.hobbies
   }
}


// Docentes
export class TeacherCons extends User {
   constructor(
       id: string,
       nome: string,
       email: string,
       data_nasc: string,
       turma_id: string,
       private especialidades: string[]
   ) {
       super(
           id,
           nome,
           email,
           data_nasc,
           turma_id
       )
   }

   getSpecialties() {
       return this.especialidades
   }
}