const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id));
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const findAllPedidoController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.findAllPedidoService(req.query.limit, req.query.offset));
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const createPedidoController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.status(201).send(await pedidoService.createPedidoService(corpo));
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const deletePedidoController = async (req, res) => {
    try{
        res.status(200).send(await pedidoService.deletePedidoService(req.params.id));
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const updateStatusPedidoController = async (req,res) => {
  try{
    res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id));
}catch (err) {
console.log(`erro: ${err.message}`);
return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
}
}

module.exports = {
    findPedidoByIdController,
    findAllPedidoController,
    createPedidoController,
    deletePedidoController,
    updateStatusPedidoController
}