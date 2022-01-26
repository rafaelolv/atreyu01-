import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';

import FormRegistroPessoa from './pages/FormRegistroPessoa';
import ListUsuario from './pages/ListUsuario';
import FormLogin from './pages/FormLogin';

import FormRegistroAgencia from './pages/FormRegistroAgencia';

import TesteImagem from './pages/TesteImagem';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style/Global.module.css';

export default props => {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path={["/", "/inicio"]} component={Main} />
                    <Route exact path="/cadastroAgencia" component={FormRegistroAgencia} />
                    <Route exact path="/usuarios" component={FormRegistroPessoa} />
                    <Route exact path="/listagemUsuarios" component={ListUsuario} />
                    <Route exact path="/login" component={FormLogin} />


                    <Route exact path="/testeImagem" component={TesteImagem} />

                </Switch>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    )
};