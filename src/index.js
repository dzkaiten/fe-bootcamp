import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';

import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool'
import { ColorTool } from './components/ColorTool';

const colorList = ['purple', 'blue', 'green', 'red', 'teal', 'gold']
const carList = [
    { id: 1, make: 'Audi', model: 'A4', year: 2002, color: 'Black', price: 7000 },
    { id: 2, make: 'BMW', model: '335i', year: 2015, color: 'White', price: 30000 }
];

ReactDOM.render( 
    <>
        <HelloWorld/>
        <CarTool cars={carList}/>
        <ColorTool colors={colorList}/>
    </>,
    document.querySelector('#root'),
);