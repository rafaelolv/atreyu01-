const sql = require("../config/db.js");

// constructor
const Usuario = function(usuario) {
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.login = usuario.login;
    this.senha = usuario.senha;
    this.usuario_foto = usuario.usuario_foto;
  };

Usuario.create = (newUsuario) => {
    return new Promise ((resolve, reject) => {
        try {
            console.log("Tentando inserir imagem!!!!!");
            sql.query("INSERT INTO usuario SET ?", newUsuario, (err, res) => {
                resolve(res);
            })
        } catch (err) {
            reject(err);
        }
    })
}


Usuario.findAll = () => {
    return new Promise ((resolve, reject) => {
        try {
            console.log("???????????????????");
            sql.query("SELECT * FROM usuario", (err, res)=> {
                resolve(res);
            })
        } catch (err) {
            reject(err);
        }
    })
}

Usuario.findByLoginSenha = (userLogin) => {
    // posso tentar fazer aqui um select aninhado, o primeiro buscando o id atraves do login e senha passados, se encontrar faz um select trazendo todos os dados
    // necessarios para colocar na sua página. 
    return new Promise((resolve, reject) => {
        const teste = "timao";
        try {
            console.log("Ativando a consulta de login!!! " + userLogin.login + " - " + userLogin.senha);
            sql.query(`SELECT * FROM usuario WHERE login LIKE "${userLogin.login}" AND senha LIKE "${userLogin.senha}"`, (err, res) => {
                resolve(res[0]);
            })
        } catch (err) {
            reject(err);
        }
    })
}

Usuario.findById = (id_usuario, result) => {
    sql.query(`SELECT * FROM usuario WHERE id_usuario = ${id_usuario}`, (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("Usuário encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found user with the id
        result({kind: "não encontrado"}, null);
    });
}

module.exports = Usuario;