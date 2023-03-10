const Usuario = require ("../model/Usuario");
const jwt = require ("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email}).select("senha");

const generateToken = (userId) => jwt.sign({ id: userId}, "asd123",{ expiresIn: 86400});

module.exports = {
    loginService,
    generateToken
}