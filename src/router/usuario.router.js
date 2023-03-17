const express = require ("express");
const router = express.Router();
const usuarioController = require ("../controller/usuario.controller");
const paginacao = require("../middleware/paginacao.middleware");

const authMiddleware = require ("../middleware/auth.middleware");
const { validaUsuario, validaEndereco, validaIdParams, valida_IdBody } = require("../middleware/validacao.middleware");

//rotas GET
router.get("/findById/:id", authMiddleware, validaIdParams, usuarioController.findUserByIdController );
router.get("/findAll", authMiddleware, paginacao, usuarioController.findAllUsersController);

//rotas POST
router.post("/create", authMiddleware, validaUsuario, usuarioController.createUserController);
router.post("/addAddress/:id", authMiddleware, validaIdParams, validaEndereco, usuarioController.addUserAdressController);
router.post("/addFavProduct/:id", authMiddleware, validaIdParams, valida_IdBody, usuarioController.addUserFavProductController);

//rotas PUT
router.put("/update/:id", authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaIdParams, usuarioController.removeUserController);
router.delete("/removeAddress/:id", authMiddleware, validaIdParams, usuarioController.removeUserAdressController);
router.delete("/removeFavProduct/:id", authMiddleware, validaIdParams, usuarioController.removeUserFavProductController);

module.exports = router;