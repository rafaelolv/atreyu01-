// Fazer uma pagina simples apenas para  exibir a imagem que possivelmente vai para o store apos o registro de um usuario, chamr o store aqui e jogar os dados em tags de
// exibição para imagem e etc
// Apos isso chamar essa pagina no lugar onde é chamda a página Home, para apos o realizar o login, chamar essa página
// tambem tentar chamar em registrar

import React, { Component } from 'react';

import usuarioReducer from './../reducers/usuarioReducer';
import { decodeToBase64 } from './../utils/imagemUtils';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        usuarios: state.usuarioReducer.usuarios
    };
};

class TesteImagem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuariosBase64: [],
        };

        this.updateToBase64 = this.updateToBase64.bind(this);
    }

    updateToBase64() {
        const {usuarios}  = this.props;
    
        const arrayBase64 = decodeToBase64(usuarios);

        this.setState({
            usuariosBase64: arrayBase64
        });
    }

    componentDidMount(){
        this.updateToBase64();
    }

    render(){

        return(
            <div>
                {/* <h1>Página Inicial do usuário logado!</h1>
                <h2>O id do usuário logado é: e o nome do usuário logado é: {usuario.nome}</h2>
                <div><Example usuario={usuario} /> </div> */}
                <ul>
                       {this.state.usuariosBase64 && this.state.usuariosBase64.map(usuario_foto => ( 
                       <li key={usuario_foto.id_usuario}>
                            {usuario_foto.nome} {usuario_foto.cpf} {usuario_foto.id_usuario}
                            <img src={usuario_foto} alt="usuarioImg" />

                       </li>
                    ))}
                    </ul>
            </div>
        );
    }
};

export default connect(mapStateToProps) ( TesteImagem );
