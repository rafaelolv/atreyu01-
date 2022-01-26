module.exports = app => {
    const agenciaController = require("../controllers/agenciaController");

    var router = require("express").Router();

    router.post("/", agenciaController.create);

    // router.get("/", agenciaController.findAll);

    // router.post("/login", usuarioController.login);

    app.use('/gulliver/agencias', router);
};  