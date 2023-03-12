const express = require ("express");
require ("dotenv").config();
const connectToDatabase = require ("./src/database/database"); //arquivo de conexão com o banco
const usuario = require ("./src/router/usuario.router");//arquivo de rota do usuario
const auth = require ("./src/router/auth.router");//arquivo de rota de login
const produto = require ("./src/router/produto.router");//arquivo de rota de produtos
const categoria = require("./src/router/categoria.router");//arquivo de rota de categoria
const carrinho = require("./src/router/carrinho.router");//arquivo de rotas carrinho

const app = express();
connectToDatabase ();//conectando com o banco


const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo"
    });
})
app.use("/usuario", usuario);//chamando rotas de usuario
app.use("/auth", auth);//chamando rotas de auth
app.use("/produto", produto);//chamando rotas de produto
app.use("/categoria", categoria);//chamando rotas de categoria
app.use("/carrinho", carrinho)//chamando rotas de carrinho


app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})