const { json } = require("body-parser");
const { response } = require("express");
const Pessoa = require("../models/usuarioModel.js");
const PessoaFactory = require("../models/pessoaFactory/pessoaFactory.js");

exports.create = (req, res, next) => {
    if(!req.body.nome) {
        console.log("ENtrou aqui? controler create teste" + req.body.nome)
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    //Posso mandar o req para uma classe contrutora atraves de um metodo implementado nela e chamado aqui, e lá ela instancia uma 
    //classe pessoa correta com os dados usados no cadastro, e retorna um objeto literal para ser usado nesse create. 
    //Acho que vai ter que ter uma classe generica com as diferentes classes pessoas.

    const pessoaFactory = new PessoaFactory();
    const pessoa = pessoaFactory.createPessoa(req)
    
    // Create a User
    // const pessoa = new Pessoa({
    //     nome: req.body.nome,
    //     sobrenome: req.body.sobrenome,
    //     dadosAcesso: {
    //         id_pessoa: null,
    //         login: req.body.dadosAcesso.login,
    //         senha: req.body.dadosAcesso.senha
    //     }
    // });

    // const pessoaTeste = {
    //     nome: req.body.nome,
    //     sobrenome: req.body.sobrenome,
    //     dadosAcesso: {
    //         id_pessoa: null,
    //         login: req.body.dadosAcesso.login,
    //         senha: req.body.dadosAcesso.senha
    //     }
    // }
    console.log("1 - pessoa do controller " + pessoa.nome + " - " + Object.values(pessoa));
    
    Pessoa.create(pessoa)
        .then(data => {
            // console.log(Object.values(data));
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
    Pessoa.findAll()
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

    Pessoa.findByLoginSenha(userLogin)
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
    Pessoa.findById(req.params.userId, (err, data) => {
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