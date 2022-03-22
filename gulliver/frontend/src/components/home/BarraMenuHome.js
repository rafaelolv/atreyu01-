import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AreaLogo from './AreaLogo';

import agenciaReducer from './../../reducers/agenciaReducer';
import { imagemDecodeToBase64 } from '../../utils/imagemUtils';

import style from '../../style/Home.module.css';

const mapStateToProps = state => {
    return {
        agencia: state.agenciaReducer.agencia,
    };
};

class BarraMenuHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoBase64: '',
        }
    }

    componentDidMount() {
        const { agencia } = this.props;
        // Object.values(console.log(agencia.logo));
        this.setState({
            logoBase64: imagemDecodeToBase64(agencia.imagem)
        })
    }

    render() {
        const { agencia } = this.props; 

        return (

            <aside className={style.barraMenu}>

                <AreaLogo infoAgencia={agencia} logo={this.state.logoBase64}/>

                <nav className={style.navAdm}>
                    <ul className={style.navAdmUl}>
                        <li>
                            {/* <Link> */}
                                    <a>Início</a>
                            {/* </Link> */}
                        </li>
                        <li>
                            {/* <Link> */}
                                    <a>Solicitações</a>
                            {/* </Link> */}
                        </li>
                        <li>
                            <Link to={"/cadastroPacote"}>
                                    <a>Cadastrar pacote</a>
                            </Link>
                        </li>
                        <li>
                            {/* <Link> */}
                                    <a>Rendimentos</a>
                            {/* </Link> */}
                        </li>
                        <li>
                            {/* <Link> */}
                                    <a>Sair</a>
                            {/* </Link> */}
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
};

export default connect(mapStateToProps)(BarraMenuHome);