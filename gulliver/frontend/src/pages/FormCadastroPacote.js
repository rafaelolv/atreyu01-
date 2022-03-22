import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import BarraMenuHome from '../components/home/BarraMenuHome';

import { createPacote } from './../actions/pacoteActions';
import agenciaReducer from './../reducers/agenciaReducer';
import InputImage from '../components/form/InputImage';


const mapStateToProps = state => {
    return {
        agencia: state.agenciaReducer.agencia,
    };
};

class FormCadastroPacote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_pacote: null,
            id_agencia: 111,
            destino: '',
            valor: '',
            data_programada: '',
            descricao: '',
            imagem: null, 
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIdAgencia = this.handleIdAgencia.bind(this);
        this.handlerChangeImage = this.handlerChangeImage.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    componentDidMount() {
        this.handleIdAgencia();
    }

    handleIdAgencia() {
        let idAgenciaValue = document.getElementById("agencia").value;
        console.log("executou???? " + idAgenciaValue);
        this.setState({
            id_agencia: idAgenciaValue,
        });
    }

    handlerChangeImage(event, image) {
        this.setState({
            [event.target.id]: image
        });
    }


    handleSubmit(event) {
        // event.preventDefault();

        // let idAgenciaValue = document.getElementById("agencia").value;
        // console.log("idAgenciaValue " + idAgenciaValue);
        // this.handleIdAgencia();
        

        var data = {
            id_agencia: this.state.id_agencia,
            destino: this.state.destino,
            valor: this.state.valor,
            data_programada: this.state.data_programada,
            descricao: this.state.descricao,
            imagem: this.state.imagem,
        }
        
        // data.set('id_agencia', this.props.agencia.id_agencia);

        console.log("----id_agencia " + data.id_agencia + " -- " +  this.state.id_agencia + " " + data.destino + " " + this.props.agencia.id_agencia);
        this.props.createPacote(data);
        
        this.setState({
            destino: '',
            valor: '',
            data_programada: '',
            descricao: '',
            imagem: null,
        });
    }

    render() {
        return(
            <Fragment>
                <div>
                    <h1>Insira os dados para cadastrar um novo pacote de viagem</h1>
                    <form>
                        <div>
                            <label>Destino:</label>
                            <input type="text" id="destino" value={this.state.destino} onChange={this.handleChange} placeholder='Destino' name="destino" />
                        </div>
                        <div>
                            <label>Valor:</label>
                            <input type="text" id="valor" value={this.state.valor} onChange={this.handleChange} placeholder='Valor' name="valor" />
                        </div>
                        <div>
                            <label>Data:</label>
                            <input type="date" id="data_programada" value={this.state.data_programada} onChange={this.handleChange} placeholder='Data' name="data" />
                        </div>
                        <div>
                            <label>Descrição:</label>
                            <textarea id="descricao" value={this.state.descricao} onChange={this.handleChange} placeholder='Descrição' name="descricao" />
                        </div>
                        <InputImage handlerChangeImage={this.handlerChangeImage} />
                        <input type="hidden" id="agencia" value={this.props.agencia.id_agencia} name="agencia" />
                    </form>
                    <button type="submit" onClick={this.handleSubmit} >
                        Cadastrar
                    </button>
                </div>
                <BarraMenuHome />
            </Fragment>
        )
    }
}
// Lembrar depois de olhar o rodape, pois quando o body cresce, o rodape fica por cima dele*******
export default connect(mapStateToProps, { createPacote })(FormCadastroPacote);



