export const REFRESH_CARS_REQUEST = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE = 'REFRESH_CARS_DONE';

export const createRefreshCarsRequestAction = () => ({ type: REFRESH_CARS_REQUEST });
export const createRefreshCarsDoneAction = (cars) => ({ type: REFRESH_CARS_DONE, payload: cars });

export const refreshCars = () => {
    console.log('refreshed cars!');
    return dispatch => {
        // Dispatch request action
        dispatch(createRefreshCarsRequestAction());
        return fetch('http://localhost:3050/cars')
            .then(res => res.json())
            // When you get a response, dispatch done action with the cars payload
            .then(cars => dispatch(createRefreshCarsDoneAction(cars)))
    }
}