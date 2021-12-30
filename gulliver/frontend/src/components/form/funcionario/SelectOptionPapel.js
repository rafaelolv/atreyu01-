import React, { Component, Fragment } from 'react';


class SelectOptionPapel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            papel: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <label>
            Designação do funcionário:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='1'>Gestor</option>
              <option value='2'>Gerente</option>
              <option value='3'>Secretário</option>
              <option value='4'>Atendente</option>
            </select>
          </label>
        )
    }
}

export default SelectOptionPapel;