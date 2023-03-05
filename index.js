const express = require ("express");
const connectToDatabase = require ("./src/database/database");
const usuario = require ("./src/router/usuario.router");


connectToDatabase ();

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