const router = require("express").Router();

const pedidoCrontroller = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido, validaId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, validaId, pedidoCrontroller.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoCrontroller.findAllPedidoController);

// Rotas Post
router.post("/create", authMiddleware, validaPedido, pedidoCrontroller.createPedidoController);

// Rotas Patch
router.patch("/updateStatus/:id", authMiddleware, validaId, pedidoCrontroller.updateStatusPedidoController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, validaId, pedidoCrontroller.deletePedidoController); 

module.exports = router;