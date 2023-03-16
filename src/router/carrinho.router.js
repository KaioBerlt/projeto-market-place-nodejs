const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const carrinhoController = require("../controller/carrinho.controller");
const { validaCarrinho, validaId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");


// Rotas Get
router.get("/find/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhoController);

// Rotas Post
router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);

//Rotas Put
router.put("/update/:id", authMiddleware, validaId, validaCarrinho, carrinhoController.updateCarrinhoController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, validaId, carrinhoController.removeCarrinhoController);

module.exports = router;