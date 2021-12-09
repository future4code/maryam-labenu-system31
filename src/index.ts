import app from "./app"
import createStudent from "./endpoints/createStudent"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"

// Endpoints
app.post("/student", createStudent) // Criar estudante
app.get("/student", getStudentByName) // Buscar estudante através do nome
app.put("/student", changeStudent) // Mudar estudante de turma

app.post("/teacher", createTeacher) // Criar docente
app.get("/teacher", getAllTeachers) // Buscar todas as pessoas docentes
app.put("/teacher", changeTeacher) // Mudar docente de turma
