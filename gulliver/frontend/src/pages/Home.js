import React, { Component, Fragment } from 'react';

const Home = ({ usuario }) => {

    // const data  = ''

    const Example = ({ usuario }) => <img src={`data:image/jpeg;base64,${usuario.usuario_foto}`} />


    return(
        <div>
            <h1>Página Inicial do usuário logado!</h1>
            <h2>O id do usuário logado é: {usuario.id_usuario} e o nome do usuário logado é: {usuario.nome}</h2>
            <div><Example usuario={usuario} /> </div>
        </div>
    );
};
export default Home;