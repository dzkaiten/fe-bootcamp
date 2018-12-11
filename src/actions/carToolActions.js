// export const ADD_CAR = 'ADD_CAR';
// export const REPLACE_CAR = 'REPLACE_CAR';
// export const DELETE_CAR = 'DELETE_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_CAR = 'CANCEL_CAR';

// export const createAddCarAction = payload => ({ type: ADD_CAR, payload });
export const createEditCarAction = editId => ({ type: EDIT_CAR, payload: editId });
// export const createDeleteCarAction = payload => ({ type: DELETE_CAR, payload });
// export const createReplaceCarAction = payload => ({ type: REPLACE_CAR, payload });
export const createCancelCarAction = editId => ({ type: CANCEL_CAR, payload: editId });