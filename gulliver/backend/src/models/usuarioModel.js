const res = require("express/lib/response");
const sql = require("../config/db.js");

constructor
const Pessoa = function(pessoa) {
    this.nome = pessoa.nome;
    this.sobrenome = pessoa.sobrenome;
    this.dadosAcesso = pessoa.dadosAcesso;
    this.dadosRegistroFuncionario = pessoa.dadosRegistroFuncionario;
};

// const queryPessoa = 'INSERT INTO pessoa SET ?';
// const queryDadosAcesso = 'INSERT INTO dados_acesso SET ?';
// const queryRegistroFuncionario = 'INSERT INTO funcionario SET ?';

Pessoa.create = (newPessoa) => {

    const {nome, sobrenome} = newPessoa;

    return new Promise (async (resolve, reject) => {
        try {

            const queryPessoa = 'INSERT INTO pessoa SET ?';
            const {nome, sobrenome} = newPessoa;
            const resultPessoa = await executeQuery(sql, queryPessoa, {nome, sobrenome});
            const data = {...newPessoa, id_pessoa: resultPessoa.insertId};

            data.dadosAcesso = {...newPessoa.dadosAcesso, id_pessoa: resultPessoa.insertId};
            data.dadosRegistroFuncionario  = {...newPessoa.dadosRegistroFuncionario, id_pessoa: resultPessoa.insertId};
            
            const queryDadosAcesso = 'INSERT INTO dados_acesso SET ?';
            const dadosAcesso = await executeQuery(sql, queryDadosAcesso, data.dadosAcesso);
            data.dadosAcesso = {...data.dadosAcesso, id_dados_acesso: dadosAcesso.insertId};

            const queryRegistroFuncionario = 'INSERT INTO funcionario SET ?';
            const funcionario = await executeQuery(sql, queryRegistroFuncionario, data.dadosRegistroFuncionario);
            data.dadosRegistroFuncionario = {...data.dadosRegistroFuncionario, id_funcionario: funcionario.insertId};

            resolve(data);

        } catch (err) {
            reject(err);
        }
    });

    // sql.query("INSERT INTO usuario SET ?", newUsuario, (err, res) => {
}

const executeQuery = async (con, query, params) => {
    return new Promise ((resolve, reject) => {
        con.query(query, params, (err, res) => {
            if(err) {
                return reject(err);
            }
            // console.log(Object.values(res));
            return resolve(res);
        });
    });
}


Pessoa.findAll = () => {
    return new Promise ((resolve, reject) => {
        try {
            console.log("???????????????????");
            sql.query("SELECT * FROM pessoa", (err, res)=> {
                resolve(res);
            })
        } catch (err) {
            reject(err);
        }
    })
}

Pessoa.findByLoginSenha = (userLogin) => {
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

Pessoa.findById = (id_usuario, result) => {
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

module.exports = Pessoa;