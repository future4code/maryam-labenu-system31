import app from "./app"
import createClass from "./endpoints/Classes/createClass"
import getAllClasses from './endpoints/Classes/getAllClasses'
import updateClass from './endpoints/Classes/createClass'
import createStudent from "./endpoints/Students/createStudent"
import getStudentByName from "./endpoints/Students/getStudentByName"
import changeStudent from "./endpoints/Students/changeStudent"
import createTeacher from "./endpoints/Teachers/createTeacher"
import getAllTeachers from "./endpoints/Teachers/getAllTeachers"

// Endpoints

app.post("/classes", createClass) // Criar turma
app.get("/classes", getAllClasses) // Buscar turmas ativas
app.put("/classes/:id/module", updateClass) // Mudar turma de módulo - Não funciona, cria uma nova turma.

app.post("/students", createStudent) // Criar estudante - Dá um erro estranho, mas cria o estudante.
app.get("/students", getStudentByName) // Busca estudante pelo nome
app.put("students/:id/classes", changeStudent) // Mudar o estudante de turma - Não funciona, dá erro.

app.post("/teachers", createTeacher) // Criar docente
app.get("/teachers", getAllTeachers) // Busca todos os docentes
app.put("/teachers/:id/classes") // Mudar o docente de turma - não funciona, dá erro.
