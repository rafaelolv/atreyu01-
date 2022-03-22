import React, { Component, Fragment } from 'react';

import FormRegistroFuncionario from '../../../pages/FormRegistroFuncionario';
import FormDadosAcesso from '../../../pages/FormDadosAcesso';


class InputsDadosPessoa extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id_pessoa: null,
            nome: '',
            sobrenome: '',
            dadosRegistroFuncionario: {},
            dadosAcesso: {
                // id_dados_acesso: null,
                // id_pessoa: null,
                // login: '',
                // senha: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDadosAcesso = this.handleChangeDadosAcesso.bind(this);
        this.handleChangeRegistroFuncionario = this.handleChangeRegistroFuncionario.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleChangeRegistroFuncionario(data) {
        this.setState({
            dadosRegistroFuncionario: data
        });
    }

    handleChangeDadosAcesso(event) {
        this.setState({
            // ...this.state.dadosAcesso,
            dadosAcesso: {...this.state.dadosAcesso, [event.target.id]: event.target.value }
        });
        
        this.props.handleChangeChild(this.state);
    }

    render() {
        return(
            <Fragment>
                <div>
                    <label>Nome: </label>
                    <input type="text" id="nome" value={this.state.nome} onChange={this.handleChange} placeholder='Nome' name="nome" />
                </div>
                <div>
                    <label>Sobrenome: </label>
                    <input type="text" id="sobrenome" value={this.state.sobrenome} onChange={this.handleChange} placeholder='Sobrenome' name="sobrenome" />
                </div>
                <FormRegistroFuncionario handleChangeChild={this.handleChangeRegistroFuncionario}/>
                <FormDadosAcesso handleChangeChild={this.handleChangeDadosAcesso} dadosAcesso={ this.state.dadosAcesso } />
            </Fragment>
        )
    }
    
}

export default InputsDadosPessoa;