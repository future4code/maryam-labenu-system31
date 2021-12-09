import express, {Express} from "express"
import cors from "cors"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
   console.log("Servidor ativo na porta 3003!")
})

export default app