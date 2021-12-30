import React, { Component, Fragment } from 'react';


class FormRegistroFuncionario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_funcionario: null,
            id_pessoa: '',
            data_admissao: '',
            // papel: '',
            salario: '',
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
                    <label>Data de admissão: </label>
                    <input type="date" id="data_admissao" value={this.state.data_admissao} onChange={this.handleChange} placeholder='Data de admissão' name="dataAdmissao" />
                </div>
                {/* <div>
                    <label>Cargo: </label>
                    <select value={this.state.papel} onChange={this.handleChange}>
                        <option value="gestor">Gestor</option>
                        <option value="gerente">Gerente</option>
                        <option value="atendente">Atendente</option>
                    </select>
                </div> */}
                <div>
                    <label>Salário: </label>
                    <input type="text" id="salario" value={this.state.salario} onChange={this.handleChange} placeholder='Salário' name="salário" />
                </div>
            </div>
        )
    }
}

export default FormRegistroFuncionario;