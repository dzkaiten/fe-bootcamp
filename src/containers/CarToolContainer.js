import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CarTool } from '../components/CarTool';

import {
    // createAddCarAction,
    createEditCarAction,
    // createDeleteCarAction,
    // createReplaceCarAction,
    createCancelCarAction
} from '../actions/carToolActions';

import { refreshCars } from '../actions/refreshCars'
import { addCar } from '../actions/addCar'
import { deleteCar } from '../actions/deleteCar'
import { replaceCar } from '../actions/replaceCar';

export const CarToolContainer = connect (
    // (state) => ({ cars: state.cars, editId: state.editId}),
    ({ cars, editId }) => ({ cars, editId }),
    (dispatch) => bindActionCreators({
        refreshCars,
        addCar: addCar,
        editCar: createEditCarAction,
        deleteCar: deleteCar,
        replaceCar: replaceCar,
        cancelCar: createCancelCarAction,
    }, dispatch),
)(CarTool);