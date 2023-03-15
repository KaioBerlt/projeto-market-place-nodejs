const router = require("express").Router();

const pedidoCrontroller = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido } = require("../middleware/validacao.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, pedidoCrontroller.findPedidoByIdController);
router.get("/findAll", authMiddleware, pedidoCrontroller.findAllPedidoController);

// Rotas Post
router.post("/create", authMiddleware, validaPedido, pedidoCrontroller.createPedidoController);

// Rotas Patch
router.patch("/updateStatus/:id", authMiddleware, pedidoCrontroller.updateStatusPedidoController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, pedidoCrontroller.deletePedidoController); 

module.exports = router;