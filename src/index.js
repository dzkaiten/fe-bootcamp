import React from 'react';
import ReactDOM from 'react-dom';

import { CalcTool } from './components/CalcTool';

// const actions = [
//     { type: 'ADD', payload: 1},
//     { type: 'SUBTRACT', payload: 2}, 
//     { type: 'ADD', payload: 3}, 
//     { type: 'SUBTRACT', payload: 4}, 
//     { type: 'ADD', payload: 5},
// ];

// acc: accumulator value (state)
// cur: current value (action)

// initialize accumulator (state) to 0, runs function acc + cur (state + action) for every value in array
// initial state applies sum of all the actions to become the final state

const createAddAction = payload => ({ type: 'ADD', payload });
const createSubtractAction = payload => ({ type: 'SUBTRACT', payload });
const createMultiplyAction = payload => ({ type: 'MULTIPLY', payload });
const createDivideAction = payload => ({ type: 'DIVIDE', payload });

const calcReducer = (state = 0, action) => {

    console.log('state:', state, 'action:', action);

    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'SUBTRACT':
            return state - action.payload;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
            return state / action.payload;
        default:
            return state;
    }
};

const createStore = (reducer) => {

    let currentState;
    const subscribers = [];

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
            subscribers.forEach(cbFn => cbFn());
        },
        subscribe: cbFn => subscribers.push(cbFn),
    }
};

const calcStore = createStore(calcReducer);

// every you subsribe to a store you give it a callback function, which is added to the array subscribers
// then when the state changes, you can iterate over subscribers (array of functions) to let them know 
// there's new data by calling the callback function
calcStore.subscribe( () => {
    console.log('state changed', calcStore.getState()); // get the updated state
    ReactDOM.render(
        <CalcTool result={calcStore.getState()} add={add} subtract={subtract} multiply={multiply} divide={divide}/>, 
        document.querySelector('#root'));
} );

// calcStore.dispatch( createAddAction(1) );
// calcStore.dispatch( createSubtractAction(2) );
// calcStore.dispatch( createAddAction(3) );
// calcStore.dispatch( createSubtractAction(4) );
// calcStore.dispatch( createAddAction(5) );
// calcStore.dispatch( createMultiplyAction(2) );
// calcStore.dispatch( createDivideAction(3) );

// nothing specifically to do with Redux, but you will use this logic with Redux
// ReactDOM.render(<h1>Test</h1>, document.querySelector('#root'));
// ReactDOM.render(<h1>Test2</h1>, document.querySelector('#root'));


// const add = (value) => {
//     calcStore.dispatch(createAddAction(value));
// };

// const add = value => calcStore.dispatch(createAddAction(value)); // purpose is to dispatch an action
// const subtract = value => calcStore.dispatch(createSubtractAction(value));
// const multiply = value => calcStore.dispatch(createMultiplyAction(value));
// const divide = value => calcStore.dispatch(createDivideAction(value));

const bindActionCreators = (actions, dispatch) => {
    return Object.keys(actions).reduce( (boundActions, actionKey) => {

        boundActions[actionKey] = (...params) => dispatch(actions[actionKey](...params));
        return boundActions;

    }, {})
};

const { add, subtract, multiply, divide } = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
}, calcStore.dispatch);

calcStore.dispatch({ type: 'INIT' })