const mongoose = require("mongoose");

//conexão com o Mongo DB 
function connectToDatabase () {
    mongoose.connect(process.env.URLDATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MONGO DB CONECTADO");
    }).catch ((err) => {
        return console.log(`Erro na conexaocom o banco: ${err}`);
    })
}

module.exports = connectToDatabase