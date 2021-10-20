// import { createStore, applyMiddleware} from 'redux';
// import { Reducers } from '../reducers';
// import thunk from 'redux-thunk';

// const initialState = {};

// const store = createStore(
//     Reducers,
//     initialState,
//     applyMiddleware(thunk)
// );

// export default store;

import { createStore, applyMiddleware, compose} from 'redux';
import { Reducers } from '../reducers';
import thunk from 'redux-thunk';

const initialState = {};

// const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Reducers,
    initialState,
    composeEnhancers(
    applyMiddleware(thunk))
);

export default store;