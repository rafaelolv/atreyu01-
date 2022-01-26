import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { createUsuario } from '../actions/usuarioActions';

import FormDadosAcesso from './FormDadosAcesso';
import FormRegistroFuncionario from './FormRegistroFuncionario';

class FormRegistroPessoa extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_pessoa: null,
            nome: '',
            sobrenome: '',
            dadosRegistroFuncionario: {},
            dadosAcesso: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDadosAcesso = this.handleChangeDadosAcesso.bind(this);
        this.handleChangeRegistroFuncionario = this.handleChangeRegistroFuncionario.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit() {

        var data = {
            id_pessoa: '',
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dadosRegistroFuncionario: this.state.dadosRegistroFuncionario,
            dadosAcesso: this.state.dadosAcesso,
        };

        // event.preventDefault();
        // this.state.id_usuario = uuidv1();
      
        // const { nome, sobrenome, dadosRegistroFuncionario, dadosAcesso} = this.state;
        // console.log("desestruturado  --- " + nome + dadosRegistroFuncionario)
        this.props.createUsuario(data)
                .then((response) => {
                    this.setState({
                        id_pessoa: response.data.id_pessoa,
                        nome: response.data.nome,
                        sobrenome: response.data.sobrenome,
                        dadosRegistroFuncionario: response.data.dadosRegistroFuncionario,
                        dadosAcesso: response.data.dadosAcesso,
                    });
                })
                .catch((e) => {
                    console.log("Erro no handlerSubmit pessoa " + e)
                });
        
        // this.setState({
        //     id_pessoa: '',
        //     nome: '',
        //     sobrenome: '',
        //     dadosRegistroFuncionario: {
        //         data_admissao: '',
        //         // papel: '',
        //         salario:'',
        //     },
        //     dadosAcesso: {
        //         login: '',
        //         senha:'',
        //     },
        // });
    }  

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleChangeDadosAcesso(data) {
        this.setState({
            dadosAcesso: data
        });
    }

    handleChangeRegistroFuncionario(data) {
        this.setState({
            dadosRegistroFuncionario: data
        });
    }

    render() {
        return(
            <Fragment>
                <h1>Registre-se</h1>
                <form>
                    <div>
                        <label>Nome: </label>
                        <input type="text" id="nome" value={this.state.nome} onChange={this.handleChange} placeholder='Nome' name="nome" />
                    </div>
                    <div>
                        <label>Sobrenome: </label>
                        <input type="text" id="sobrenome" value={this.state.sobrenome} onChange={this.handleChange} placeholder='Sobrenome' name="sobrenome" />
                    </div>

                    <FormRegistroFuncionario handleChangeChild={this.handleChangeRegistroFuncionario}/>
                    <FormDadosAcesso handleChangeChild={this.handleChangeDadosAcesso} />
                </form>
                <button type="submit" onClick={this.handleSubmit} >
                    Cadastrar
                </button>

                <Link to={"/cadastroAgencia"}>
                    <button>
                        Cadastrar agência
                    </button>
                </Link>
            </Fragment>
        )
    }
}

export default connect(null, { createUsuario })(FormRegistroPessoa);