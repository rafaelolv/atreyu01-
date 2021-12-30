import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { createUsuario } from '../actions/usuarioActions';
import InputImage from './../components/form/InputImage';
// import uuidv1 from 'uuidv1';

import {Link} from 'react-router-dom';

// const mapDispatchToProps = dispatch => {
//     return {
//         createUsuario: usuario => dispatch(createUsuario(usuario))
//         // create(usuario) {
//         //     const action = createUsuario(usuario)
//         //     dispatch(action)
//         // }
//     }
// };

class FormRegistroUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_usuario: null,
            nome: '',
            cpf: '',
            login: '',
            senha: '',
            usuarioFoto: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerChangeImage = this.handlerChangeImage.bind(this);
    }

    // ***O uso aqui do then seria caso eu quisesse setar o valor  recebido da requisição/promisse e setar no estado desse componente, para poder exibi-lo 
    // nessa tela.

    // handleSubmit() {
    //     const { nome, cpf, login, senha } = this.state;

    //     this.props
    //         .createUsuario(nome, cpf, login, senha)
    //         .then((data) => {
    //             this.setState({
    //                 id: data.id,    ***O uso aqui do the seria caso eu quisesse setar o valor  recebido da requisição/promisse e setar no estado desse componente, para poder exibi-lo 
    //                 nome: data.nome,       nessa tela.
    //                 cpf: data.cpf,
    //                 login: data.login,
    //                 senha: data.senha,

    //             });
    //             console.log(data);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }

    handleSubmit() {
        // event.preventDefault();
        // this.state.id_usuario = uuidv1();
      
        const { nome, cpf, login, senha, usuarioFoto } = this.state;
        this.props.createUsuario(nome, cpf, login, senha, usuarioFoto);
        
        this.setState({
            id_usuario: '',
            nome: '',
            cpf: '',
            login: '',
            senha: '',
            usuarioFoto: null,
        });
    }  

    handlerChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handlerChangeImage(event, image) {
        this.setState({
            [event.target.id]: image
        });
    }

    render() {
        return(
            <Fragment>
                <h1>
                    Cadastre-se
                </h1>
                <form>
                    <div>
                        <label htmlFor="nome">
                            Nome
                        </label>
                        <input type="text" id="nome" value={this.state.nome} onChange={this.handlerChange} placeholder='Nome' name="nome" />
                    </div>
                    <div>
                        <label htmlFor="cpf">
                            CPF
                        </label>
                        <input type="text" id="cpf" value={this.state.cpf} onChange={this.handlerChange} name="cpf"/>
                    </div>
                    <div>
                        <label htmlFor="login">
                            Login
                        </label>
                        <input type="text" id="login" value={this.state.login} onChange={this.handlerChange} name="login" />
                    </div>
                    <div>
                        <label htmlFor="senha">
                            Senha
                        </label>
                        <input type="text" id="senha" value={this.state.senha} onChange={this.handlerChange} name="senha"/>
                    </div>
                    <InputImage handlerChangeImage={this.handlerChangeImage} />
                </form>
                <button type="submit" onClick={this.handleSubmit} >
                    Cadastrar
                </button> <br/> <br/>

                <Link to={'/testeImagem'}>
                    <button>
                        <span>Teste de IMmagem</span> 
                        
                    </button>
                </Link>

            </Fragment>
        )
    }
}

export default connect(null, { createUsuario })(FormRegistroUsuario);