import { CREATE_USUARIO, LIST_USUARIO } from "../actions/actionTypes/usuarioActionTypes";

const initialState = {
    usuarios: []
};

function usuarioReducer(state = initialState, action) {

    console.log("Chegou 5 reduceeeeeer!, action " + action.payload);
    
    // console.log("Chegou 5.4 reduceeeeeer!, action " + action.payload.usuarios);
    console.log("Chegou 5.5 reduceeeeeer!, action.type " + action.type);

    const usuarios = action.payload;
    console.log("Chegou 5.6 reducer!, action " + usuarios)

    // usuarios.forEach(element => {
    //     console.log("E ai??? " + element)
    // });

    switch (action.type) {
        case CREATE_USUARIO:
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

        default:
            return state;
    }
};

export default usuarioReducer;