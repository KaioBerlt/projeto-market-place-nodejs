const express = require ("express");
const connectToDatabase = require ("./src/database/database");

connectToDatabase ();

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