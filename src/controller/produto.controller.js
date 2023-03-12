const produtoService = require ("../service/produto.service");

const findProductsByIdController = async (req, res) => {
    try{
        res.send(await produtoService.findProductsByIdService(req.params.id));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
      }
};

const findAllProductsController = async (req, res) => {
    try{
        res.send(await produtoService.findAllProductsService());
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
      }
};

const createProductsController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
            createdAt: new Date(),
        }

        res.send(await produtoService.createProductsService(corpo));

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
      }
};

const updateProductsController = async (req, res) => {
    try{
        res.send(await produtoService.updateProductsService(req.params.id, req.body));

    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const deleteProductsController = async (req, res) => {
    try{
        res.send(await produtoService.deleteProductsService(req.params.id));
        
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const addCategoriaProductsController = async (req, res) => {
    try{
        req.body.createdAt = new Date();
        const categoria = await produtoService.addCategoriaProductsService(req.params.id, req.body);


    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};

const removeCategoriaProductsController = async (req, res) => {
    try{
        const categoria = await produtoService.removeCategoriaProductsService(req.body);
        
    }catch (err) {
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro Inesperado, Tente Novamente` });
  }
};


module.exports = {
    findProductsByIdController,
    findAllProductsController,
    createProductsController,
    updateProductsController,
    deleteProductsController,
    addCategoriaProductsController,
    removeCategoriaProductsController
}