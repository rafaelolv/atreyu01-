import React, {Component, Fragment} from 'react';
// simport { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BarraMenuHome from './../components/home/BarraMenuHome';

import pacoteReducer from './../reducers/pacoteReducer';
import agenciaReducer from './../reducers/agenciaReducer';
import usuarioReducer from './../reducers/usuarioReducer';

    // const data  = ''

    // const Example = ({ usuario }) => <img src={`data:image/jpeg;base64,${usuario.usuario_foto}`} />

class Home extends Component {
    constructor(props) {
        super(props)
    }
  
    // if (agencia) {
    //     console.log("2 -- teste skol beats home " + agencia.nome)
    //     this.setState((agencia) => {
    //         return { agenciaInfo: agencia } 
    //     })
    // }

    render() {

        return (
            
            <Fragment> 
                <h1>Hello World </h1>
                <BarraMenuHome />
            </Fragment>
        );
    }
};

// export default connect(mapStateToProps)(Home);
export default Home;