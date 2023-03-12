const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");

// Rotas Get
router.get("/find/:id", authMiddleware, categoriaController.findByIdCategoriaController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);

// Rotas Post
router.post("/create", authMiddleware, categoriaController.createCategoriaController);

//Rotas Put
router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController);

// Rota Delete
router.delete("/delete/:id", authMiddleware, categoriaController.deleteCategoriaController); 

module.exports = router;