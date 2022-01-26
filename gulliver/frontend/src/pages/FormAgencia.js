import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { createAgencia } from '../actions/agenciaActions';
// import usuarioReducer from './../reducers/usuarioReducer';

// import DadosGestor from '../components/form/funcionario/DadosGestor';
import InputImage from '../components/form/InputImage';


// const mapStateToProps = state => {
//     return {
//         usuarios: state.usuarioReducer.usuarios
//     };
// };

class FormAgencia extends Component {
    constructor(props) {
        super(props);

        this.state = {
           id_agencia: null,
           nome: '',
           cnpj: '',
           cor: '',
           logo: '',
           id_funcionario: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlerChangeImage = this.handlerChangeImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // event.preventDefault();
        // this.state.id_usuario = uuidv1();
        
        // console.log("id_funcionario " + this.props.getIdFuncionario + " -- " + this.state.id_funcionario)
        // const { nome, sobrenome, dadosRegistroFuncionario, dadosAcesso} = this.state;

        this.props.createAgencia(this.state);
        
        this.setState({
            nome: '',
            cnpj: '',
            cor: '',
            logo: '',
        });
    }  

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handlerChangeImage(event, image) {
        this.setState({
            [event.target.id]: image
        });

        this.props.callBackStepAgencia(this.state);
    }

    render() {
        return(
            <Fragment>
                <h1>Registre a sua agência</h1>
                <Fragment>
                    <div>
                        <label>Nome: </label>
                        <input type="text" id="nome" value={this.state.nome} onChange={this.handleChange} placeholder='Nome' name="nome" />
                    </div>
                    <div>
                        <label>CNPJ: </label>
                        <input type="text" id="cnpj" value={this.state.cnpj} onChange={this.handleChange} placeholder='CNPJ' name="cnpj" />
                    </div>
                    <div>
                        <label>Cor: </label>
                        <input type="text" id="cor" value={this.state.cor} onChange={this.handleChange} placeholder='Cor' name="cor" />
                    </div>
                    <InputImage handlerChangeImage={this.handlerChangeImage} />
                </Fragment>
                <button type="submit" onClick={this.handleSubmit} >
                    Cadastrar
                </button>
            </Fragment>
        )
    }
}

export default connect(null, { createAgencia })(FormAgencia);;