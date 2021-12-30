import React, { Component, Fragment } from 'react';

class FormDadosAcesso extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_dados_acesso: null,
            id_pessoa: null,
            login: '',
            senha: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    
        this.props.handleChangeChild(this.state);
    }

    render() {
        return(
            <div>
                <div>
                    <label>Login: </label>
                    <input type="text" id="login" value={this.state.login} onChange={this.handleChange} placeholder='Login' name="login" />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="text" id="senha" value={this.state.senha} onChange={this.handleChange} placeholder='Senha' name="senha" />
                </div>
            </div>         
        )
    }
}

export default FormDadosAcesso;