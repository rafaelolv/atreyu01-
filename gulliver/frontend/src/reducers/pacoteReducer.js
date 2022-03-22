import { CREATE_PACOTE, LIST_PACOTES, GET_PACOTE } from './../actions/actionTypes/pacoteActionTypes';

const initialState = {
    pacotes: [],
    pacote: null
};

function pacoteReducer(state = initialState, action) {

    switch (action.type) {
        case CREATE_PACOTE:
            return {
                ...state,
                pacotes: [...state.pacotes, action.payload]
            }
            // return [...state, payload];

        case GET_PACOTE:
            return {
                ...state,
                pacote: action.payload
            }

        case LIST_PACOTES:
            return {
                ...state,
                pacotes: [...action.payload]
            }

        default:
            return state;
    }
};

export default pacoteReducer;
