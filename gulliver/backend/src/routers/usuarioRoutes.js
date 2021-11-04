module.exports = app => {
    const usuarioController = require("../controllers/usuarioController");

    var router = require("express").Router();

    router.post("/", usuarioController.create);

    router.get("/", usuarioController.findAll);

    router.post("/login", usuarioController.login);

    app.use('/guliver/usuarios', router);
};  