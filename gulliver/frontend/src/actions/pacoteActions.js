import { CREATE_PACOTE, LIST_PACOTES } from './actionTypes/pacoteActionTypes';
import PacoteService from "../services/pacoteService";

export const createPacote = (data) => async (dispatch) => {
    try {
        const res = await PacoteService.create(data);

        dispatch({
            type: CREATE_PACOTE,
            payload: res.data
        });
       
    } catch (err) {
        console.log(err);
    }
};

export const retrieveAllPacotes = () => async (dispatch) => {
   
    try {
        const res = await PacoteService.getAll();
        console.log("actions res " + res.data);
        // let pacotes = res.data;
        // pacotes.map(pacote => console.log("destino: " + pacote.destino))
        dispatch({
            type: LIST_PACOTES,
            payload: res.data,
        });
    } catch (err) {
    console.log(err);
    }
};

export const retrieveAllPacotesByIdAgencia = () => async (dispatch) => {
   
    // try {
    //     const res = await Usuarioservice.getAll();
    //     console.log("actions res " + res.data)
    //     let usuarios = res.data;
    //     usuarios.map(usuario => console.log("Nome: " + usuario.nome))
    //     dispatch({
    //       type: LIST_USUARIO,
    //       payload: res.data,
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }

};

export const retrievePacoteById = () => async (dispatch) => {
   
    // try {
    //     const res = await Usuarioservice.getAll();
    //     console.log("actions res " + res.data)
    //     let usuarios = res.data;
    //     usuarios.map(usuario => console.log("Nome: " + usuario.nome))
    //     dispatch({
    //       type: LIST_USUARIO,
    //       payload: res.data,
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
};
