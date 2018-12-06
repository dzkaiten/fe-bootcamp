import React from 'react'
// import { omit } from 'lodash';

import { ToolHeader } from './ToolHeader'
import { CarTable } from './CarTable'
import { CarForm } from './CarForm'

export class CarTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: props.cars.concat(),
        }
    }

    addCar = (newCar) => {
        this.setState({
            cars: this.state.cars.concat({
                id: Math.max(...this.state.cars.map(c => c.id), 0) + 1,
                ...newCar
            })
        })
    }

    render() {
        return <>
            <ToolHeader headerText="Car T00L" />
            <CarTable cars={this.state.cars}/>
            <CarForm buttonText="Add Car" onSubmitCar={this.addCar}/>
        </>;
    }
}