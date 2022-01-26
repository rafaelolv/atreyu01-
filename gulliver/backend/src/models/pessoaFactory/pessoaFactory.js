class PessoaFactory {
    constructor() {
        this.pessoaClass = PessoaContato;
    }

    createPessoa(req) {
        if(req.body.dadosRegistroFuncionario) {
            console.log("salario " + req.body.dadosRegistroFuncionario.salario)
            this.pessoaClass = PessoaFuncionario;          
        } else if(req.body.pacote) {
            this.pessoaClass = PessoaUsuario;
        } else if(req.body.contato && req.body.dadosAcesso) {
            this.pessoaClass = PessoaCliente;
        } else if(req.body.contato && !req.body.dadosAcesso) {
            this.pessoaClass = PessoaContato;
        } else {
            this.pessoaClass = PessoaDadosAcesso;
        }
        
        return new this.pessoaClass(req);
    }
}

const PessoaContato = function(req) {
    this.nome = req.pessoa.nome;
    this.sobrenome = req.pessoa.sobrenome;
    this.contato = req.contato
};

const PessoaDadosAcesso = function(req) {
    console.log("------testtando " + req.body.pessoa.nome);
    this.nome = req.body.pessoa.nome,
    this.sobrenome = req.body.pessoa.sobrenome,
    this.dadosAcesso = {
        id_pessoa: null,
        login: req.body.dadosAcesso.login,
        senha: req.body.dadosAcesso.senha
    }
};

const PessoaFuncionario = function(req) {
    console.log("------testtando Func " + req.body.pessoa.nome);
    console.log("------testtando Func " + req.body.dadosRegistroFuncionario.data_admissao);
    console.log("------testtando Func " + req.body.dadosRegistroFuncionario.salario);
    // console.log("------testtando Func " + req.body.dadosRegistroFuncionario.papel);
    console.log("------testtando Func " + req.body.dadosAcesso.login);
    
    this.nome = req.body.pessoa.nome,
    this.sobrenome = req.body.pessoa.sobrenome,
    this.dadosRegistroFuncionario = {
        id_pessoa: null,
        data_admissao: req.body.dadosRegistroFuncionario.data_admissao,
        // papel: req.body.dadosRegistroFuncionario.papel,
        salario: req.body.dadosRegistroFuncionario.salario
    },
    this.dadosAcesso = {
        id_pessoa: null,
        login: req.body.dadosAcesso.login,
        senha: req.body.dadosAcesso.senha
    }
};

const PessoaCliente = function (req) {
    this.nome = pessoa.nome;
    this.sobrenome = pessoa.sobrenome;
    this.contato = pessoa.contato
    this.dadosPessoais = pessoa.dadosPessoais;
    this.dadosAcesso = pessoa.dadosAcesso;
    this.endereco = pessoa.endereco;
};

const PessoaUsuario = function (req) {
    this.nome = pessoa.nome;
    this.sobrenome = pessoa.sobrenome;
    this.contato = pessoa.contato
    this.dadosPessoais = pessoa.dadosPessoais;
    this.dadosAcesso = pessoa.dadosAcesso;
    this.endereco = pessoa.endereco;
    this.pacote = pessoa.pacote;
};

module.exports = PessoaFactory;