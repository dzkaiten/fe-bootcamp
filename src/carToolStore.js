import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { loadingReducer, editIdReducer, carsReducer } from './reducers/carToolReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

export const carToolStore = createStore( 
    combineReducers({
        loading: loadingReducer, 
        editId: editIdReducer, 
        cars: carsReducer 
    }), 
    composeWithDevTools(applyMiddleware(thunk)),
);
