import { CREATE_AGENCIA, GET_AGENCIA, LIST_AGENCIA } from "../actions/actionTypes/agenciaActionTypes";

const initialState = {
    agencias: [],
    agencia: null
};

function agenciaReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_AGENCIA:
            console.log("Chegou CREATE_AGENCIA! reducer ? ------");
            return {
                ...state,
                agencias: [...state.agencias, action.payload]
            }
            // return [...state, payload];

        case LIST_AGENCIA:
            return {
                ...state,
                agencias: [...action.payload]
                // ...state, list: action.payload.data "como esta lá no udemy, testar amanha (03/10) aula 177"
            }

        case GET_AGENCIA:
            console.log("Chegou GET_AGENCIA! reducer ? ------ " + action.payload.nome);
            // Object.values(console.log(action.payload))
            return {
                ...state,
                agencia: action.payload
            }

        default:
            return state;
    }
};

export default agenciaReducer;