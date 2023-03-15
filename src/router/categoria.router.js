const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria } = require("../middleware/validacao.middleware");

// Rotas Get
router.get("/find/:id", authMiddleware, categoriaController.findByIdCategoriaController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);

// Rotas Post
router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);

//Rotas Put
router.put("/update/:id", authMiddleware, validaCategoria, categoriaController.updateCategoriaController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, categoriaController.deleteCategoriaController); 

module.exports = router;