import React, {Fragment} from 'react'
import { Route } from 'react-router'

import Home from '../../pages/Home';
import FormCadastroPacote from './../../pages/FormCadastroPacote';

export default props => 
    <Fragment>
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/cadastroPacote" component={FormCadastroPacote} />
    </Fragment>