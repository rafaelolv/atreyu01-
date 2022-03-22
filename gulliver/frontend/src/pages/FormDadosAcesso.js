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
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })

    //     this.props.handleChangeChild(this.state, event);

    //     if(event.target.id === "senha"){
    //         console.log("senha formdadosAcesso " + this.state.senha);
    //         this.props.handleChangeChild(this.state);
    //         console.log("senha formdadosAcesso--2--" + this.state.senha);
    //     }
    // }

    render() {
        return(
            <div>
                <div>
                    <label>Login: </label>
                    <input type="text" id="login" value={this.props.dadosAcesso.login} onChange={this.props.handleChangeChild} placeholder='Login' name="login" />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="text" id="senha" value={this.props.dadosAcesso.senha} onChange={this.props.handleChangeChild} placeholder='Senha' name="senha" />
                </div>
            </div>         
        )
    }
}

export default FormDadosAcesso;