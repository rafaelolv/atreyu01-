const sql = require("../config/db.js");

constructor
const Pacote = function(pacote) {
    this.id_agencia = pacote.id_agencia;
    this.destino = pacote.destino;
    this.valor = pacote.valor;
    this.data_programada = pacote.data_programada;
    this.descricao = pacote.descricao;
    this.imagem = pacote.imagem;
};

Pacote.create = (newPacote) => {

    return new Promise (async (resolve, reject) => {
        try {
            const querySalvarPacote = 'INSERT INTO pacote SET ?';
            const { id_agencia, destino, valor, data_programada, descricao, imagem } = newPacote;
            const resultPacote = await executeQuery(sql, querySalvarPacote, { id_agencia, destino, valor, data_programada, descricao, imagem });
            const data = {...resultPacote, id_pacote: resultPacote.insertId};

            resolve(data);

        } catch (err) {
            reject(err);
        }
    });
}

Pacote.findAll = () => {
    return new Promise ((resolve, reject) => {
        try {
            console.log("PacoteModel findAll  ??????????????????? ");
            sql.query("SELECT id_pacote, id_agencia, destino, valor, data_programada, descricao, imagem FROM pacote", (err, res)=> {
                resolve(res);
            })
        } catch (err) {
            reject(err);
        }
    })
}

Pacote.findAgenciaAndPacotesByIdFuncionario = () => {

}

Pacote.findPacotesById = (id) => {
    return new Promise (async (resolve, reject) => {
        try {
            const query = 'select * from pacote where id_agencia = ?';
            const resultPacotes = await executeQuery(sql, query, id);
            const data = {pacote: resultPacotes};
            console.log("-----pacotes " + data + " " + resultPacotes);
            // colocar uma verificação para ver se há pacotes ou nao, ou seja se está indefined, se estiver undefined é pq nao tem pacotes cadastrados
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

module.exports = Pacote;