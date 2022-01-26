const Agencia = require("../models/agenciaModel");
const Pessoa = require("../models/usuarioModel.js");

const PessoaFactory = require("../models/pessoaFactory/pessoaFactory.js");

exports.create = (req, res, next) => {
    if(!req.body.pessoa.nome) {
        console.log("ENtrou aqui? controler create")
        // console.log(Object.values(req.body));
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const reqData = {
        body: {
            pessoa: req.body.pessoa,
            dadosRegistroFuncionario: req.body.pessoa.dadosRegistroFuncionario,
            dadosAcesso: req.body.pessoa.dadosAcesso,
        }
    };

    const pessoaFactory = new PessoaFactory();
    const pessoa = pessoaFactory.createPessoa(reqData)

    const agencia = new Agencia({
        id_agencia: null,
        nome: req.body.agencia.nome,
        cnpj: req.body.agencia.cnpj,
        cor: req.body.agencia.cor,
        logo: req.body.agencia.logo,
    });
    console.log("agencia " + req.body.agencia.nome)
    Pessoa.create(pessoa)
        .then(data => {
            agencia.id_funcionario = data.dadosRegistroFuncionario.id_funcionario;
            const agenciaFunc = {
                pessoa: data,
            }
            console.log("1 - " + Object.values(data));
            Agencia.create(agencia)
                .then(data => {
                    console.log("2 --- " + Object.values(data));
                    agenciaFunc.agencia = data;
                    console.log("3 --- " + Object.values(agenciaFunc));
                    res.send(agenciaFunc);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Agência."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Pessoa."
            });
        });

    // Agencia.create(agencia)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while creating the Tutorial."
    //         });
    // });
}