import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CarTool } from '../components/CarTool';

import {
    createAddCarAction,
    createEditCarAction,
    createDeleteCarAction,
    createReplaceCarAction,
    createCancelCarAction
} from '../actions/carToolActions';

import { refreshCars } from '../actions/refreshCars'

export const CarToolContainer = connect (
    // (state) => ({ cars: state.cars, editId: state.editId}),
    ({ cars, editId }) => ({ cars, editId }),
    (dispatch) => bindActionCreators({
        refreshCars,
        addCar: createAddCarAction,
        editCar: createEditCarAction,
        deleteCar: createDeleteCarAction,
        replaceCar: createReplaceCarAction,
        cancelCar: createCancelCarAction,
    }, dispatch),
)(CarTool);