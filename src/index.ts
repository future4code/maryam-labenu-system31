import app from "./app"
import createClass from "./endpoints/createClass"
import getAllClasses from './endpoints/getAllClasses'
import updateClass from './endpoints/createClass'

// Endpoints
app.post("/classes", createClass) // Criar turma
app.get("/classes", getAllClasses) // Buscar turmas ativas
app.put("/classes/edit/:id", updateClass) // Mudar turma de módulo - Não funciona, cria uma nova turma.
