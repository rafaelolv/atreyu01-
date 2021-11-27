const { json } = require("body-parser");
const { response } = require("express");
const Usuario = require("../models/usuarioModel.js");

exports.create = (req, res, next) => {
    if(!req.body.nome) {
        console.log("ENtrou aqui? controler create")
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    console.log("Chegou aqui no controller create 2 ! " + " " + req.body.usuarioFoto + " " + req.body.nome);
    // Create a User
    const usuario = new Usuario({
        nome: req.body.nome,
        cpf: req.body.cpf,
        login: req.body.login,
        senha: req.body.senha,
        usuario_foto: req.body.usuarioFoto
    });

    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving users."
            });
        });

     
    
    //Aqui poderia ser um metodo async/await e retornaria  uma promise para o  action e lá teria o then e catch

        // if(err){
        //     console.log("Chegou aqui nesse 5 se for erro!" + err);
        //     res.status(500).send({
        //         message:
        //             err.message || "Some error occurred while retrieving tutorials."
        //     });
        // }else{
        //     console.log("Chegou aqui 5.5!" + data);
        //     // var arrayData = JSON.parse(JSON.stringify(data));
        //     res.send(data);
        //     // return data;
        // }    
};

exports.login = (req, res, next) => {
    console.log("Chegou aqui login controller " + req.body.login + " - " + req.body.senha)
    if(!req.body.login || !req.body.senha) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // const user = {req.body.login, req.body.senha};

    const userLogin = new Usuario({
        login: req.body.login,
        senha: req.body.senha
    });

    Usuario.findByLoginSenha(userLogin)
        .then(data => {
            console.log("data do constroller " + data.nome)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving user."
            });
        });
}

exports.findOne = (req, res) => {
    Usuario.findById(req.params.userId, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(400).send({
                    message: `Not found user with id ${req.params.userId}.`
                });
            }else{
                res.status(500).send({
                    message: "Error retrieving user with id " + req.params.userId
                });
            }
        }else{
            res.send(data);
        }               
    });
};