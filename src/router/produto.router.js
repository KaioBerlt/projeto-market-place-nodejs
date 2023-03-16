const router = require("express").Router();

const produtoCrontroller = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaId } = require ("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, validaId, produtoCrontroller.findProductsByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoCrontroller.findAllProductsController);

// Rotas Post
router.post("/create", authMiddleware, validaProduto, produtoCrontroller.createProductsController);
router.post("/addCategoria/:id", authMiddleware, validaId, produtoCrontroller.addCategoriaProductsController);
//Rotas Put
router.put("/update/:id", authMiddleware, validaId, validaProduto, produtoCrontroller.updateProductsController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, validaId, produtoCrontroller.deleteProductsController); 
router.delete("/removeCategoria/:id", authMiddleware, validaId, produtoCrontroller.removeCategoriaProductsController);

module.exports = router;