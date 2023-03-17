const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const carrinhoController = require("../controller/carrinho.controller");
const { validaCarrinho, validaIdParams, validaProdutoCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");


// Rotas Get
router.get("/find/:id", authMiddleware, validaIdParams, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhoController);

// Rotas Post
router.post("/create", authMiddleware, validaProdutoCarrinhoPedido, validaCarrinho, carrinhoController.createCarrinhoController);

//Rotas Put
router.put("/update/:id", authMiddleware, validaIdParams, validaCarrinho, carrinhoController.updateCarrinhoController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, validaIdParams, carrinhoController.removeCarrinhoController);

module.exports = router;