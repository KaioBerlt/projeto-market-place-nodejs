const express = require ("express");
const connectToDatabase = require ("./src/database/database"); //arquivo de conexão com o banco
const usuario = require ("./src/router/usuario.router");//arquivo de rota do usuario
const app = express();
connectToDatabase ();//conectando com o banco


const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo"
    });
})
app.use("/usuario", usuario);
app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})