
// const bodyParser = require('body-parser');  /* deprecated */
const express = require('express');

const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: '50mb'})); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: '50mb', extended: true })); /* bodyParser.urlencoded() is deprecated */

require("../routers/usuarioRoutes")(app); //passando app para a função que esta nesse caminho
require("../routers/agenciaRoutes")(app);

// app.use("/cadastrousuario", UsuarioRoutes);

// server.get('/hello', function (req, res) {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`BACKEND is running on ${port}.`);
// })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});