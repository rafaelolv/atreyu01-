import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FormAgencia from './FormAgencia';
import FormRegistroPessoa from './FormRegistroPessoa';

import { createAgencia } from './../actions/agenciaActions';
import InputsDadosPessoa from '../components/form/formPessoa/InputsDadosPessoa';
import FormDadosAcesso from './FormDadosAcesso';
import FormRegistroFuncionario from './FormRegistroFuncionario';


class FormRegistroAgencia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changeForm: true,
            pessoa: null,
            agencia: null,
        };

        this.handleStepPessoa = this.handleStepPessoa.bind(this);
        this.handleStepAgencia = this.handleStepAgencia.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStepPessoa(newPessoa) {
        this.setState({
            pessoa: newPessoa
        });
    }

    handleStepAgencia(newAgencia) {
        this.setState({
            agencia: newAgencia
        });
    }

    nextStep() {
        this.setState({
            changeForm: false
        });
    }

    handleSubmit() {
        var data = {
            pessoa: this.state.pessoa,
            agencia: this.state.agencia,
        };
        console.log("---SENHA handleSubmit formregistroagencia " + data.pessoa.dadosAcesso.senha)
        this.props.createAgencia(data);
    }

    render() {
        return(
           <Fragment>
               <h1>Cadastro de agência</h1>
               <form>
                    {this.state.changeForm ? (
                        <Fragment>
                            <InputsDadosPessoa handleChangeChild={this.handleStepPessoa} />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <FormAgencia callBackStepAgencia={this.handleStepAgencia} />
                        </Fragment>
                    )}
               </form>
               <button onClick={this.nextStep} >
                    Próximo passo
                </button>
               <button type="submit" onClick={this.handleSubmit} >
                    Cadastrar agência
               </button>
           </Fragment> 
        )
    }
}

export default connect(null, { createAgencia })(FormRegistroAgencia);