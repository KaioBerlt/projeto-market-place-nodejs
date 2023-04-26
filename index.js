const express = require ("express");
require ("dotenv").config();
const cors = require("cors");
const connectToDatabase = require ("./src/database/database"); //arquivo de conexão com o banco

const usuario = require ("./src/router/usuario.router");//arquivo de rota do usuario
const auth = require ("./src/router/auth.router");//arquivo de rota de login
const produto = require ("./src/router/produto.router");//arquivo de rota de produtos
const categoria = require("./src/router/categoria.router");//arquivo de rota de categoria
const carrinho = require("./src/router/carrinho.router");//arquivo de rotas carrinho
const pedido = require ("./src/router/pedido.router");//arquivo de rotas pedido
const docs = require("./src/router/docs.router");//arquivo de rota documentacao

const app = express();
const port = 3000;
app.use(express.json());

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(cors(
    {
        origin: [
            "http://localhost:3001/",
            "http://localhost:3001/login"
        ],
        methods: ["GET", "POST", "PUT", "PATCH","DELETE"]
    }
));

connectToDatabase ();//conectando com o banco


app.use("/usuario", usuario); //chamando rotas de usuario
app.use("/auth", auth); //chamando rotas de auth
app.use("/produto", produto); //chamando rotas de produto
app.use("/categoria", categoria); //chamando rotas de categoria
app.use("/carrinho", carrinho); //chamando rotas de carrinho
app.use("/pedido", pedido); //chamando rotas de pedido
app.use("/docs", docs);//chamando rotas de documentacao

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo"
    });
});

app.listen(port, () =>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})