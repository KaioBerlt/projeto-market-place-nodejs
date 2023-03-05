const express = require ("express");
const connectToDatabase = require ("./src/database/database"); //arquivo de conexão com o banco
const usuario = require ("./src/router/usuario.router");//arquivo de rota do usuario


connectToDatabase ();//conectando com o banco

app.use("/usuario", usuario);

const app = express();

const port = 3000;
app.use(express.json());

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo"
    });
})

app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})