const sql = require("../config/db.js");

// constructor
const Usuario = function(usuario) {
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.login = usuario.login;
    this.senha = usuario.senha;
  };

Usuario.create = (newUsuario) => {
    return new Promise ((resolve, reject) => {
        try {
            sql.query("INSERT INTO usuario SET ?", newUsuario, (err, res) => {
                resolve(res);
            })
        } catch (err) {
            reject(err);
        }
    })
}

// Usuario.findAll = (err, data) => {
//     sql.query("SELECT * FROM usuario", (err, res) => {
//         if(err) {
//             console.log("error: " + err);
//             return err;
//         }
//         console.log("usuárioooo: " + res);
//         return res;
//     });
// }

Usuario.findAll = () => {
    return new Promise ((resolve, reject) => {
        try {
            sql.query("SELECT * FROM usuario", (err, res)=> {
                resolve(res);
            })
        } catch (err) {
            reject(err);
        }
    })

    // sql.query("SELECT * FROM usuario", (err, res)=> {
    //     if(err){
    //         console.log("error: ", err);
    //         result(null, err);
    //         return;
    //     }
        
    //     console.log("usuárioooo: ", res);
    //     result(null, res);
    // });
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