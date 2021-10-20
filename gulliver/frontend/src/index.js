// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// // import store from './store';

// import App from './App';
// import reducers from './reducers';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import {faSignInAlt,  faIdCard} from '@fortawesome/free-solid-svg-icons';

// // import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

// library.add(faSignInAlt, faIdCard);

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
//     && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(reducers, devTools);

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>, 
//     document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
// // serviceWorkerRegistration.unregister();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';

import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faSignInAlt,  faIdCard} from '@fortawesome/free-solid-svg-icons';

// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

library.add(faSignInAlt, faIdCard);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
