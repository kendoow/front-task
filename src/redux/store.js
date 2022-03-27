import { createStore, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'; // объект со всем редюсерами из index.js
const rootReducer = combineReducers(reducers); 

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;