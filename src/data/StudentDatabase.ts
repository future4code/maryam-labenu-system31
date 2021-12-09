import knex, { Knex } from "knex"
import { Student } from "../types"

export class StudentDatabase {

    constructor() {

    }

    private connection: Knex = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_SCHEMA,
           port: 3306,
           multipleStatements: true
        }
     })

   async create(student: Student){

        await this.connection("ESTUDANTE")
         .insert({
             id: Date.now().toString(),
             nome: student.getName(),
             email: student.getEmail(),
             data_nasc: student.getBirthDate(),
             turma_id: student.getClassId(),
             hobbies: student.getHobbies()})
    }

    // async getAll(): Promise<Student[]>{
    //     const characters = await this.connection("ESTUDANTE").select();
    //     const charactersClass: Student[] = []; 
    //     for(let ch of characters){
    //         const c = new Student(ch.name, ch.gender, ch.id, ch.description);
    //         charactersClass.push(c);
    //     }

    //     return charactersClass;


    // }
}