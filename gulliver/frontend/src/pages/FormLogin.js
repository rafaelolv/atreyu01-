import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import usuarioReducer from './../reducers/usuarioReducer';
import { logarUsuario } from '../actions/usuarioActions';
import AutoRegisterLoginButton from '../components/header/nav/login/AutoRegisterLoginButton';
import Home from './Home';

const mapStateToProps = state => {
    return {
        dadosUsuarioLogado: state.usuarioReducer.usuario
    };
};

class FormLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            senha: '',
            dadosUsuarioLogado: null
        };

        this.handleRegister = this.handleRegister.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    handleRegister(){
        const {login, senha} = this.state;
        console.log("handlerRegister " + login);

        this.props
            .logarUsuario(login, senha);
            
            this.setState({
                login: '',
                senha: '',
            });

    }

    handlerChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        const { dadosUsuarioLogado } = this.props;
        return (
            <Fragment>
                {dadosUsuarioLogado == null ? (
                    <div>
                        <h1>Faça seu login</h1>
                        <form>
                            <div>
                                    <input type="text" id="login" value={this.state.login} onChange={this.handlerChange} placeholder='Login' name="login" />
                            </div>
                            <div>
                                    <input type="text" id="senha" value={this.state.senha} onChange={this.handlerChange} placeholder='Senha' name="senha" />
                            </div>
                        </form>
                        <div>
                            <span>
                                Esqueceu sua senha?
                            </span>
                        </div>
                        <button type="submit" onClick={this.handleRegister} >
                                Login
                            </button>
                            <div>
                                <span>
                                    Ainda não tem uma conta? Cadastre-se
                                </span>
                            </div>
                            <AutoRegisterLoginButton />
                    </div>
                
                ) : (
                    <Home usuario={ dadosUsuarioLogado }/>
                )}
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, { logarUsuario })(FormLogin);