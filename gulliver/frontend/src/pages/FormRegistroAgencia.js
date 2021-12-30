import React, { Component, Fragment } from 'react';

import InputImage from '../components/form/InputImage';

class FormRegistroAgencia extends Component {
    constructor(props) {
        super(props);

        this.state = {
           id_agencia: null,
           id_funcionario: null,
           nome: '',
           cnpj: '',
           cor: '',
           logo: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlerChangeImage = this.handlerChangeImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <form>
                    <div>
                        <label>Nome</label>
                        <input type="text" id="nome" value={this.state.nome} onChange={this.handlerChange} placeholder='Nome' name="nome" />
                    </div>
                    <div>
                        <label>CNPJ</label>
                        <input type="text" id="cnpj" value={this.state.nome} onChange={this.handlerChange} placeholder='CNPJ' name="cnpj" />
                    </div>
                    <div>
                        <label>Cor</label>
                        <input type="text" id="cor" value={this.state.nome} onChange={this.handlerChange} placeholder='Cor' name="cor" />
                    </div>
                    <div>
                        <label>Logo</label>
                        <input type="text" id="logo" value={this.state.nome} onChange={this.handlerChange} placeholder='Logo' name="logo" />
                    </div>

                    <InputImage handlerChangeImage={this.handlerChangeImage} />
                </form>
                <button type="submit" onClick={this.handleSubmit} >
                    Cadastrar
                </button>
            </Fragment>
        )
    }
}

export default FormRegistroAgencia;