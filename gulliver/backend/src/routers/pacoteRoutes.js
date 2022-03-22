module.exports = app => {
    const pacoteController = require("../controllers/pacoteController");

    var router = require("express").Router();

    router.post("/", pacoteController.create);

    router.get("/", pacoteController.findAll);

    app.use('/gulliver/pacotes', router);
};  