import { createStore, applyMiddleware,combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from './reducers'; // объект со всем редюсерами из index.js
const rootReducer = combineReducers(reducers); 
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;