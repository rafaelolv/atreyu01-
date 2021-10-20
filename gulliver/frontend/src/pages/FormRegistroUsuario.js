import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createUsuario } from '../actions/usuarioActions';
// import uuidv1 from 'uuidv1';

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
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeCpf = this.onChangeCpf.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangeSenha = this.onChangeSenha.bind(this);

    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value,
        });
    }

    onChangeCpf(e) {
        this.setState({
            cpf: e.target.value,
        });
    }

    onChangeLogin(e) {
        this.setState({
            login: e.target.value,
        });
    }

    onChangeSenha(e) {
        this.setState({
            senha: e.target.value,
        });
    }

    handleSubmit() {
        const { nome, cpf, login, senha } = this.state;

        this.props
            .createUsuario(nome, cpf, login, senha)
            .then((data) => {
                this.setState({
                    id: data.id,
                    nome: data.nome,
                    cpf: data.cpf,
                    login: data.login,
                    senha: data.senha,

                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    // handleSubmit() {
    //     // event.preventDefault();
    //     // this.state.id_usuario = uuidv1();
    //     let { nome } = this.state;
    //     console.log("STATE " + nome)
    //     this.props.createUsuario(this.state);
        
    //     this.setState({
    //         id_usuario: '',
    //         nome: '',
    //         cpf: '',
    //         login: '',
    //         senha: '',
    //     });
    // }  

    // handlerChange(event) {
    //     console.log("ID:   " + event.target.id)
    //     console.log("ID:   " + event.target.value)
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }

    render() {
        return(
            <Fragment>
                <h1>
                    Cadastre-se
                </h1>
                {/* <form onSubmit={this.handleSubmit}> */}
                <div>
                    <div>
                        <label htmlFor="nome">
                            Nome
                        </label>
                        <input type="text" id="nome" value={this.state.nome} onChange={this.onChangeNome} placeholder='Nome' name="nome" />
                    </div>
                    <div>
                        <label htmlFor="cpf">
                            CPF
                        </label>
                        <input type="text" id="cpf" value={this.state.cpf} onChange={this.onChangeCpf} name="cpf"/>
                    </div>
                    <div>
                        <label htmlFor="login">
                            Login
                        </label>
                        <input type="text" id="login" value={this.state.login} onChange={this.onChangeLogin} name="login" />
                    </div>
                    <div>
                        <label htmlFor="senha">
                            Senha
                        </label>
                        <input type="text" id="senha" value={this.state.senha} onChange={this.onChangeSenha} name="senha"/>
                    </div>
                    {/* <div>
                        <input type="submit" name="Cadastrar"/>
                    </div> */}
                {/* </form> */}
                    <button type="submit" onClick={this.handleSubmit} >
                        Submit
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default connect(null, { createUsuario })(FormRegistroUsuario);