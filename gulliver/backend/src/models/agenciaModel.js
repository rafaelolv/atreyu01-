const sql = require("../config/db.js");

const Agencia = function(agencia) {
    this.nome = agencia.nome;
    this.cnpj = agencia.cnpj;
    this.cor = agencia.cor;
    this.logo = agencia.logo;
};

Agencia.create = (newAgencia) => {
    return new Promise (async (resolve, reject) => {
        try {
            const queryAgencia = 'INSERT INTO agencia SET ?';
            const resultAgencia = await executeQuery(sql, queryAgencia, newAgencia);

            const data = {...newAgencia, id_agencia: resultAgencia.insertId};

            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

const executeQuery = async (con, query, params) => {
    return new Promise ((resolve, reject) => {
        con.query(query, params, (err, res) => {
            if(err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
}

module.exports = Agencia;