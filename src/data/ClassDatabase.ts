import knex, { Knex } from "knex"
import { Classes } from "../types"
import connection from "../connection"

export class ClassDatabase {

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

   async create(classes: Classes){

        await this.connection("TURMA")
         .insert({
             id: Date.now().toString(),
             nome: classes.getName(),
             modulo: classes.getClass()})
    }

    async getAll(): Promise<Classes[]> {
        const schoolClass = await this.connection("TURMA").select()
        const stringClass: Classes[] = []

        for(let ch of schoolClass) {
            const newClass = new Classes (ch.nome, ch.modulo)
            stringClass.push(newClass)
        }

        return stringClass
    }
}