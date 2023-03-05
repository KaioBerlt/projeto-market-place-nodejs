const express = require ("express");
const router = express.Router();
const usuarioController = require ("../controller/usuario.controller");


router.get("/findById:id", usuarioController.findUserByIdController );
router.get("/findAll", usuarioController.findAllUsersController);

router.post("/create", usuarioController.creatUserController);
router.post("/addAddress/:id", usuarioController.addUserAdressController);
router.post("/addFavProduct/:id", usuarioController.addUserFavProduct);

router.put("/update/:id", usuarioController.updateUserController);

router.delete("/remove/:id", usuarioController.removeUserController);
router.delete("/removeAddress", usuarioController.removeUserAdressController);
router.delete("/removeFavProduct", usuarioController.removeUserFavProduct);

module.exports = router;