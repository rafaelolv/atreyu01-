import usuarioReducer from './usuarioReducer';
import agenciaReducer from './agenciaReducer';
import pacoteReducer from './pacoteReducer';
import {combineReducers} from 'redux';


export const Reducers = combineReducers({
    usuarioReducer: usuarioReducer,
    agenciaReducer: agenciaReducer,
    pacoteReducer: pacoteReducer
});