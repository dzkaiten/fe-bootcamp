const actions = [
    { type: 'ADD', payload: 1},
    { type: 'SUBTRACT', payload: 2}, 
    { type: 'ADD', payload: 3}, 
    { type: 'SUBTRACT', payload: 4}, 
    { type: 'ADD', payload: 5},
];

// acc: accumulator value (state)
// cur: current value (action)

// initialize accumulator (state) to 0, runs function acc + cur (state + action) for every value in array
// initial state applies sum of all the actions to become the final state

const finalState = actions.reduce( (state, action) => {

    console.log('state:', state, 'action:', action);

    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'SUBTRACT':
            return state - action.payload;
        default:
            return state;
    }

}, 0); 

console.log(finalState);