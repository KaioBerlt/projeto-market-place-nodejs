const jwt = require("jsonwebtoken");
const {findUserByIdService} = require("../service/usuario.service");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ message:"Token Não Informado"});
    }

    const parts = authHeader.split(" ") //["Bearer, <token>"]

    if(parts.length !== 2){
        return res.status(401).send({ message:"Token Invalido"});
    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message:"Token Não Malformatado"});
    }

    jwt.verify(token, "asd123" /*process.env.SECRET*/, async (err, decoded) => {
        if(err){
            return res.status(500).send({ message:"Token Invalido"});
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            return res.status(401).send({ message:"Token Invalido!"});
        }

        req.userId = decoded.id;

        return next();
    })
}