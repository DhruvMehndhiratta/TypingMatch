import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)


export default store;
