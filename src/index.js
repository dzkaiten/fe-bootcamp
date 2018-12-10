import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css';

// import { HelloWorld } from './components/HelloWorld';
// import { ColorTool } from './components/ColorTool';
// const colorList = ['purple', 'blue', 'green', 'red', 'teal', 'gold']

import { CarToolContainer } from './containers/CarToolContainer';
import { carToolStore } from './carToolStore';
import { PersonForm } from './components/PersonForm';

ReactDOM.render(
    <PersonForm />,
    document.querySelector('#root'),
);