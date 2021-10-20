import React, {Component} from "react";
import { connect } from "react-redux";
import { retrieveUsuarios } from "../actions/usuarioActions";
import usuarioReducer from './../reducers/usuarioReducer';

const mapDispatchToProps = dispatch => {
    return {
        retrieveUsuarios: () => dispatch(retrieveUsuarios())
    }
} 

const mapStateToProps = state => {
    return {
        usuarios: state.usuarioReducer.usuarios
    };
};

class ListUsuario extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         usuarios: []
    //     }
    // }

  componentDidMount() {
      this.props.retrieveUsuarios();
  }

    render() {

        const {usuarios}  = this.props;
        
        return (
            <div>
                <div>
                    <h4>Listagem de usuários</h4>
                    <ul>
                       {usuarios && usuarios.map(usuario => ( 
                       <li key={usuario.id_usuario}>
                            {usuario.nome} {usuario.cpf} {usuario.id_usuario}
                       </li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) ( ListUsuario );