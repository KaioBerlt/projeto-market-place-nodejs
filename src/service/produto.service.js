const Produto = require ("../model/Produto");

const findProductsByIdService = (id) =>{
    return Produto.findById(id);
};

const findAllProductsService = () =>{
    return Produto.find();
};

const createProductsService = (body) =>{
    return Produto.create(body);
};

const updateProductsService = (id, body) =>{
    return Produto.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const deleteProductsService = (id) =>{
    return Produto.findByIdAndRemove(id);
};

module.exports = {
    findProductsByIdService,
    findAllProductsService,
    createProductsService,
    updateProductsService,
    deleteProductsService
}

