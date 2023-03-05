const findUserByIdController = async (req, res) => {
  try {


  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const findAllUsersController = async (req, res) => {
  try {


  } catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const creatUserController = async (req, res) => {
    try {


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const updateUserController = async (req, res) => {
    try {


    } catch (err) {
      console.log(`erro: ${err.message}`);
      return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
    }
};

const removeUserController = async (req, res) => {
    try {


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
