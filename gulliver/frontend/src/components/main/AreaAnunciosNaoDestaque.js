import React, {Component} from 'react';
import { connect } from "react-redux";
import { decodeToBase64 } from '../../utils/imagemUtils';
import { Link } from 'react-router-dom';

import Anuncio from './Anuncio';

import style from '../../style/Anuncios.module.css';

const mapStateToProps = state => {
    return {
        pacotes: state.pacoteReducer.pacotes
    };
};

class AreaAnunciosNaoDestaque extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayPacotesImgBase64: [],
        };

        this.updateToBase64 = this.updateToBase64.bind(this);
    }

    updateToBase64() {
        const {pacotes}  = this.props;
    
        const arrayBase64 = decodeToBase64(pacotes);

        this.setState({
            arrayPacotesImgBase64: arrayBase64
        });
    }

    componentDidMount(){
        this.updateToBase64();
    }

    render() {
        // const {pacotes}  = this.props;

        return (
            <section className={style.areaAnunciosNaoDestaque}>
                {React.Children.toArray(this.state.arrayPacotesImgBase64.map(item => (

                    <Link to={"/anuncios/" + item.id_pacote} >
                        <Anuncio pacote={item} />
                    </Link>   
                )))}
            </section>
        );
    }
};

export default connect(mapStateToProps)(AreaAnunciosNaoDestaque);