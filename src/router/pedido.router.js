const router = require("express").Router();

const pedidoCrontroller = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido, validaIdParams, validaProdutoCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, validaIdParams, pedidoCrontroller.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoCrontroller.findAllPedidoController);

// Rotas Post
router.post("/create", authMiddleware, validaProdutoCarrinhoPedido, validaPedido, pedidoCrontroller.createPedidoController);

// Rotas Patch
router.patch("/updateStatus/:id", authMiddleware, validaIdParams, pedidoCrontroller.updateStatusPedidoController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, validaIdParams, pedidoCrontroller.deletePedidoController); 

module.exports = router;