const router = require("express").Router();

const produtoCrontroller = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, produtoCrontroller.findProductsByIdController);
router.get("/findAll", authMiddleware, produtoCrontroller.findAllProductsController);

// Rotas Post
router.post("/create", authMiddleware, produtoCrontroller.createProductsController);
router.post("/addCategoria/:id", authMiddleware, produtoCrontroller.addCategoriaProductsController);
//Rotas Put
router.put("/update/:id", authMiddleware, produtoCrontroller.updateProductsController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, produtoCrontroller.deleteProductsController); 
router.delete("/removeCategoria/:id", authMiddleware, produtoCrontroller.removeCategoriaProductsController);

module.exports = router;