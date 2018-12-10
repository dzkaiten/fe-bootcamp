import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css';

// import { HelloWorld } from './components/HelloWorld';
// import { ColorTool } from './components/ColorTool';
import { CarToolContainer } from './containers/CarToolContainer';
import { carToolStore } from './carToolStore';

// const colorList = ['purple', 'blue', 'green', 'red', 'teal', 'gold']

ReactDOM.render( 
    <Provider store={carToolStore}>
        <CarToolContainer />
    </Provider>,
    document.querySelector('#root'),
);