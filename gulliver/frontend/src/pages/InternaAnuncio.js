import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";

import Anuncio from '../components/main/Anuncio';


const mapStateToProps = state => {
    return {
        pacotes: state.pacoteReducer.pacotes
    };
};

class InternaAnuncio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anuncioAtual: {},
            id_solicitacao: '',
            id_cliente: '',
            id_pacote: '',
            mensagem: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit() {

    }

    componentDidMount() {
        const {pacotes}  = this.props;

        const anuncioSelecionado = pacotes.find((pacote) => { 
            return pacote.id_pacote == this.props.match.params.id; 
        }, this)

        this.setState({
            anuncioAtual: anuncioSelecionado,
        })
    }
    
    render() {
        const { anuncioAtual } = this.state;

        return(
            <Fragment>
                <Anuncio pacote={ anuncioAtual } />
                <form>
                    <textarea id="mensagem" value={this.state.mensagem} onChange={this.handleChange} placeholder='Dúvida ou esclarecimentos sobre o pacote' 
                        name="mensagem" />
                </form>
                <button type="submit" onClick={this.handleSubmit} >
                        Enviar solicitação
                </button>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(InternaAnuncio);