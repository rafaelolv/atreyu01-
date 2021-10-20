import { ADD_AGENCIA } from "../actions/actionTypes/agenciaActionTypes";

const initialState = {
    agencias: []
};

function agenciaReducer(state = initialState, action) {
    if(action.type === ADD_AGENCIA) {
        return {
            ...state,
            agencias: [...state.agencias, action.payload]
        }
    }
    return state;
};

export default agenciaReducer;