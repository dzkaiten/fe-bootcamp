import { refreshCars } from './refreshCars'

export const DELETE_CAR_REQUEST = 'DELETE_CAR_REQUEST';
// export const DELETE_CAR_DONE = 'DELETE_CAR_DONE';

export const createDeleteCarRequestAction = (carId) => ({ type: DELETE_CAR_REQUEST, payload: carId });
// export const createDeleteCarDoneAction = (car) => ({ type: DELETE_CAR_DONE, payload: car });

export const deleteCar = (carId) => {
    return dispatch => {
        // Dispatch request action
        dispatch(createDeleteCarRequestAction(carId));
        return fetch('http://localhost:3050/cars/' + carId, { method: 'DELETE' })
            .then(res => res.json())
            // When you get a response, dispatch done action with the cars payload
            .then(() => dispatch(refreshCars()));
    }
}