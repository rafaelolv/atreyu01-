import { CREATE_USUARIO, LIST_USUARIO, GET_USER } from "../actions/actionTypes/usuarioActionTypes";

const initialState = {
    usuarios: [],
    usuario: null
};

function usuarioReducer(state = initialState, action) {

    switch (action.type) {
        case CREATE_USUARIO:
            console.log("Chegou aqui CREATE_USUARIO ? -----")
            return {
                ...state,
                usuarios: [...state.usuarios, action.payload]
            }
            // return [...state, payload];

        case LIST_USUARIO:
            console.log("Chegou 6! reducer");
            return {
                ...state,
                usuarios: [...action.payload]
                // ...state, list: action.payload.data "como esta lá no udemy, testar amanha (03/10) aula 177"
            }

        case GET_USER:
            console.log("Chegou aqui GET_USER reducer ? ------ ")
            // Object.values(console.log(action.payload))
            return {
                ...state,
                usuario: action.payload
            }

        default:
            return state;
    }
};

export default usuarioReducer;