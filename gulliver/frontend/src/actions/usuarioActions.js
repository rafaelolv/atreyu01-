import { CREATE_USUARIO, LIST_USUARIO, GET_USER } from "./actionTypes/usuarioActionTypes";
import Usuarioservice from "../services/usuarioService";

export const createUsuario = (nome, cpf, login, senha) => async (dispatch) => {
    try {
        // let { nome, cpf, login, senha } = usuario;
        // console.log("action create usuario: " + nome);
        // console.log("action create usuario: " + cpf);

        const res = await Usuarioservice.create({ nome, cpf, login, senha });

        console.log("action creacteUsuario Chegou aqui! " + res.data)
        
        dispatch({
            type: CREATE_USUARIO,
            payload: res.data
        });

        return Promise.resolve(res.data);
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
    try{
        console.log("logarUsuario " + login);
        const res = await Usuarioservice.login({ login, senha });
        console.log("---action do usuário logado::::: " + res.data);

        // let usuarios = res.data;
        // usuarios.map(usuario => console.log("Nome: " + usuario.nome +  ": " + usuario.id_usuario))

        dispatch({
            type: GET_USER,
            payload: res.data,
          });

    }catch (err) {
        console.log(err);
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