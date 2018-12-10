import { createStore } from 'redux';
import { carToolReducer } from './reducers/carToolReducer'

export const carToolStore = createStore(carToolReducer);
