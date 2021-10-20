import usuarioReducer from './usuarioReducer';
import agenciaReducer from './agenciaReducer';
import {combineReducers} from 'redux';

export const Reducers = combineReducers({
    usuarioReducer: usuarioReducer,
    agenciaReducer: agenciaReducer
});