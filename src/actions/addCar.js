import { refreshCars } from './refreshCars'

export const ADD_CAR_REQUEST = 'ADD_CAR_REQUEST';
export const ADD_CAR_DONE = 'ADD_CAR_DONE';

export const createAddCarRequestAction = (car) => ({ type: ADD_CAR_REQUEST, payload: car });
// export const createAddCarDoneAction = (car) => ({ type: ADD_CAR_DONE, payload: car });

export const addCar = (car) => {
    return dispatch => {
        // Dispatch request action
        dispatch(createAddCarRequestAction(car));
        // Insert - POST collection URL + request body
        return fetch('http://localhost:3050/cars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                ...car
            })
        })
            .then(res => res.json())
            // When you get a response, dispatch done action with the cars payload
            .then(() => dispatch(refreshCars()));
    }
}