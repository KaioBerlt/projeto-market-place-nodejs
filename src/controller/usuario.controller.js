const userService = require ("../service/usuario.service");


const findUserByIdController = async (req, res) => {
  try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user){
          return res.status(404).send({ message: "Usuario Nao Encontrado, Tente Novamente"});
        }

        return res.status(200).send(user);

  } catch (err) {

    if(err.kind == "ObjectId"){
      console.log(err.kind == "ObjectId");
      return res.status(400).send({ message: `ID Nao Encontrado, Tente Novamente` });
    }

    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const findAllUsersController = async (req, res) => {
  try {
      return res.status(200).send(await userService.findAllUsersService());
  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const creatUserController = async (req, res) => {
    try {
      const body = req.body;
      if(!body.nome){
        return res.status(400).send({ message:"Campo nome precisa ser preenchido"});
      }

      return res.status(201).send(await userService.createUserService(body));


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const updateUserController = async (req, res) => {
    try {
      const body = req.body;
      if(!body.nome){
        return res.status(400).send({ message:"Campo nome precisa ser preenchido"});
      }

      return res.send(await userService.updateUserService(req.params.id, req.body, body));


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const removeUserController = async (req, res) => {
    try {
      const deletedUser = await userService.removeUserService(req.params.id);

      if(deletedUser.deletedCount > 0){
        res.status(200).send({ message: `Usuario Deletado Com Sucesso` });
      }else{
        res.status(404).send({ message: `Usuario Não Encontrado, Tente Novamente` });
      }


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const addUserAdressController = async (req, res) => {
    try {


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const removeUserAdressController = async (req, res) => {
    try {


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const addUserFavProductController = async (req, res) => {
    try {


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const removeUserFavProductController = async (req, res) => {
    try {


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};



module.exports = {
  findUserByIdController,
  findAllUsersController,
  creatUserController,
  updateUserController,
  removeUserController,
  addUserAdressController,
  removeUserAdressController,
  addUserFavProductController,
  removeUserFavProductController,
};
