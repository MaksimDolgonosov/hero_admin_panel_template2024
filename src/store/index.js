//import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import heroes from '../reducers/heroesSlice';
import filters from '../reducers/filtersSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

// const store = createStore(combineReducers({ heroes, filters }),
//     compose(applyMiddleware(stringMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     ));
 const store = configureStore({
    reducer: { heroes, filters },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== "production",

})

export default store;