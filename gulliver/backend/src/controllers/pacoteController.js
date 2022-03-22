const Pacote = require("../models/pacoteModel.js");

exports.create = (req, res, next) => {
    if(!req.body.destino) {
        console.log("ENtrou aqui? controler create teste" + req.body.destino + req.data)
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //Create a package
    const pacote = new Pacote({
        id_agencia: req.body.id_agencia,
        destino: req.body.destino,
        valor: req.body.valor,
        data_programada: req.body.data_programada,
        descricao: req.body.descricao,
        imagem: req.body.imagem,
    });

    Pacote.create(pacote)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the package."
            });
        });
};

exports.findAll = (req, res) => {
    Pacote.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving users."
            });
        });
};