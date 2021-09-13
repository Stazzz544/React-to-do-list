import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import ToDoReducer from './reducers/ToDoReducer'


const store = createStore(ToDoReducer, composeWithDevTools())

export default store;