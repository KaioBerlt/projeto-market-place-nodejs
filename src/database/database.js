const mongoose = require("mongoose");

function connectToDatabase () {
    mongoose.connect("mongodb://127.0.0.1:27017/Projeto", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MONGO DB CONECTADO");
    }).catch ((err) => {
        return console.log(`Erro na conexaocom o banco: ${err}`);
    })
}

module.exports = connectToDatabase