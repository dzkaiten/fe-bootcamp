import { ADD_CAR, REPLACE_CAR, DELETE_CAR, EDIT_CAR, CANCEL_CAR } from '../actions/carToolActions';
import { REFRESH_CARS_REQUEST, REFRESH_CARS_DONE } from '../actions/refreshCars';
import { DELETE_CAR_REQUEST } from '../actions/deleteCar';
import { REPLACE_CAR_REQUEST, REPLACE_CAR_DONE } from '../actions/replaceCar';

// const cars = [
//     { id: 1, make: 'Audi', model: 'A4', year: 2002, color: 'Black', price: 7000 },
//     { id: 2, make: 'BMW', model: '335i', year: 2015, color: 'White', price: 30000 }
// ];

export const carToolReducer = (state = { cars: [], editCarId: -1 }, action) => {
    switch (action.type) {
        case REFRESH_CARS_REQUEST:
            return { ...state, 
                loading: true 
            }
        case REFRESH_CARS_DONE:
            return { ...state, 
                loading: false, 
                cars: action.payload 
            }
        case DELETE_CAR_REQUEST:
            return { ...state, 
                loading: true,
            }
        case REPLACE_CAR_REQUEST:
            return {...state,
                loading: true
            }
        case REPLACE_CAR_DONE:
            return {...state,
                loading: false,
            }
      
        // case ADD_CAR:
        //     return { 
        //         ...state, 
        //         cars: state.cars.concat({
        //             id: Math.max(...state.cars.map(c => c.id), 0) + 1,
        //             ...action.payload,
        //         }),
        //         editId: -1,
        //     };
        // case REPLACE_CAR:
        //     const newCars = state.cars.concat();
        //     const carIndex = state.cars.findIndex(c => c.id === action.payload.id);
        //     newCars[carIndex] = action.payload;
            
        //     return {
        //         ...state,
        //         cars: newCars,
        //         editId: -1 
        //     };
        // case DELETE_CAR:
        //     return {
        //         ...state,
        //         cars: state.cars.filter(c => c.id !== action.payload),
        //         editId: -1,
        //     }
        case EDIT_CAR:
            return {
                ...state,
                editId: action.payload,
            }
        case CANCEL_CAR:
            return {
                ...state,
                editId: -1,
            }
        default:
            return state;

    }
};