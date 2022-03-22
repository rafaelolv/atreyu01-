import { CREATE_USUARIO, LIST_USUARIO, GET_USER } from "./actionTypes/usuarioActionTypes";
import { GET_AGENCIA } from "./actionTypes/agenciaActionTypes";
import { LIST_PACOTES } from "./actionTypes/pacoteActionTypes";
import Usuarioservice from "../services/usuarioService";

export const createUsuario = (data) => async (dispatch) => {
    try {
        
        const res = await Usuarioservice.create(data);
        
        dispatch({
            type: CREATE_USUARIO,
            payload: res.data
        });

        return Promise.resolve(res);
    } catch(err) {
        return Promise.reject(err);
    }
};

export const retrieveUsuarios = () => async (dispatch) => {
   
    try {
        const res = await Usuarioservice.getAll();
        console.log("actions res " + res.data)
        let usuarios = res.data;
        usuarios.map(usuario => console.log("Nome: " + usuario.nome))
        dispatch({
          type: LIST_USUARIO,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
      }

    // const res = await Usuarioservice.getAll();
    // return [...res];
}

export const logarUsuario = (login, senha) => async (dispatch) => {
    try {

        const res = await Usuarioservice.login({ login, senha });

        dispatch({
            type: GET_USER,
            payload: res.data.funcionario,
        });

        dispatch({
            type: GET_AGENCIA,
            payload: res.data.agencia,
        });

        dispatch({
            type: LIST_PACOTES,
            payload: res.data.pacote,
        });
        return Promise.resolve();
    }catch (err) {
        return Promise.reject(err);
    }
}

// retrieveUsuarios()
//     .then(usuarios => usuarios.map(usuario => usuario.nome))
//     .then(nomes => console.log(nomes))
//     .then(res => {
//         dispatch({
//             type: LIST_USUARIO,
//             payload: res.data,
//         })
//     })
//         // dispatch({
//         //     type: LIST_USUARIO,
//         //     payload: res.data,
//         // });

//     .catch(err => {
//         throw (err);
//     });


// export const retrieveUsuarios = () => async (dispatch) => {


    // try {
    //     console.log("Chegou 1!");
    //     const res = await Usuarioservice.getAll()
    //     console.log("Chegou 6! action" + res.data);
        
    //     // res.data.forEach(usuario => {
    //     //     console.log(usuario);
    //     // });

    //     dispatch({
    //         type: LIST_USUARIO,
    //         payload: res.data,
    //     });

    // }catch (err) {
    //     console.log("Deu esse erro? " + err);
    // }
//};

// export const createUsuario = (usuario) => (dispatch) => {
//     return Usuarioservice.create(usuario)
//         .then(res => {
//             dispatch({
//                 type: CREATE_USUARIO,
//                 payload: res.data
//             });
//         })
//         .then(err => {
//             throw (err);
//         })
// };