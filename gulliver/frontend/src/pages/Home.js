import React, { Component, Fragment } from 'react';

const Home = ({ usuario }) => {

    return(
        <div>
            <h1>Página Inicial do usuário logado!</h1>
            <h2>O id do usuário logado é: {usuario.id_usuario} e o nome do usuário logado é: {usuario.nome}</h2>
        </div>
    );
};
export default Home;