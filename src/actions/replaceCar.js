import { refreshCars } from './refreshCars'

export const REPLACE_CAR_REQUEST = 'REPLACE_CAR_REQUEST';
export const REPLACE_CAR_DONE = 'REPLACE_CAR_DONE';

// export const createReplaceCarRequestAction = (car, carId) => ({ type: REPLACE_CAR_REQUEST, payload: { car, carId } });
export const createReplaceCarRequestAction = (car) => ({ type: REPLACE_CAR_REQUEST, payload: car });
export const createReplaceCarDoneAction = () => ({ type: REPLACE_CAR_DONE });

export const replaceCar = (car) => {
    return dispatch => {
        // Dispatch request action
        dispatch(createReplaceCarRequestAction(car));
    
        return fetch('http://localhost:3050/cars/' + car.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                ...car
            })
        })
            .then(res => res.json())
            // When you get a response, dispatch done action with the cars payload
            .then(() => dispatch(createReplaceCarDoneAction()))
            .then(() => dispatch(refreshCars()))
    }
}