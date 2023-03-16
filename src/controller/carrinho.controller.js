const carrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.findCarrinhoByIdService(req.params.id));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};


const findAllCarrinhoController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.findAllCarrinhoService(req.query.limit, req.query.offset));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const createCarrinhoController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.status(201).send(await carrinhoService.createCarrinhoService(corpo));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const updateCarrinhoController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const removeCarrinhoController = async (req, res) => {
    try{
        res.status(200).send(await carrinhoService.removeCarrinhoService(req.params.id));
          
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhoController,
    createCarrinhoController,
    updateCarrinhoController,
    removeCarrinhoController
}