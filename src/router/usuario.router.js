const express = require ("express");
const router = express.Router();
const usuarioController = require ("../controller/usuario.controller");

const authMiddleware = require ("../middleware/auth.middleware");

//rotas GET
router.get("/findById/:id", authMiddleware ,usuarioController.findUserByIdController );
router.get("/findAll", usuarioController.findAllUsersController);

//rotas POST
router.post("/create", usuarioController.createUserController);
router.post("/addAddress/:id", usuarioController.addUserAdressController);
router.post("/addFavProduct/:id", usuarioController.addUserFavProductController);

//rotas PUT
router.put("/update/:id", usuarioController.updateUserController);

//rotas DELETE
router.delete("/remove/:id", usuarioController.removeUserController);
router.delete("/removeAddress/:id", usuarioController.removeUserAdressController);
router.delete("/removeFavProduct/:id", usuarioController.removeUserFavProductController);

module.exports = router;