import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logarUsuario } from '../actions/usuarioActions';
import AutoRegisterLoginButton from '../components/header/nav/login/AutoRegisterLoginButton';


const FormLogin = (props) => {

    let history = useHistory();
    const dispatch = useDispatch();

    const [login, setUsername] = useState("");
    const [senha, setPassword] = useState("");

    const handleLogin = () => {

        // const {login, senha} = this.state;
        dispatch(logarUsuario(login, senha))
            .then(() => {
                history.push("/home");
                // window.location.reload();
            })
            .catch((e) => {
                console.log(e);
            });

        


        // this.props
        //     .logarUsuario(login, senha);
        
        // this.setState({
        //     login: '',
        //     senha: '',
        // });
    }

    const onChangeLogin = (e) => {
        const login = e.target.value;
        setUsername(login);
    };
    
    const onChangePassword = (e) => {
        const senha = e.target.value;
        setPassword(senha);
    };

    // const handleChange = (event) => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    return (
        <Fragment>
            <div>
                <h1>Faça seu login</h1>
                <form>
                    <div>
                        <input type="text" id="login" value={login} onChange={onChangeLogin} placeholder='Login' name="login" />
                    </div>
                    <div>
                        <input type="text" id="senha" value={senha} onChange={onChangePassword} placeholder='Senha' name="senha" />
                    </div>
                </form>
                <div>
                    <span>
                        Esqueceu sua senha?
                    </span>
                </div>
                <button type="submit" onClick={handleLogin} >
                        Login
                </button>
                <div>
                    <span>
                        Ainda não tem uma conta? Cadastre-se
                    </span>
                </div>
                <AutoRegisterLoginButton />
            </div>
        </Fragment>
    ); 
}

export default FormLogin;