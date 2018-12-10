import React from 'react'
// import { omit } from 'lodash';

import { ToolHeader } from './ToolHeader'
import { CarTable } from './CarTable'
import { CarForm } from './CarForm'

export class CarTool extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         cars: props.cars.concat(),
    //         editId: -1, 
    //     }
    // }

    // addCar = (newCar) => {
    //     this.setState({
    //         cars: this.state.cars.concat({
    //             id: Math.max(...this.state.cars.map(c => c.id), 0) + 1,
    //             ...newCar
    //             // make: newCar.make
    //             // model: newCar.model,
    //             // year: newCar.year,
    //             // color: newCar.color,
    //             // price: newCar.price
    //         })
    //     })
    // }

    // editCar = (index) => {
    //     // change to an EditCarRow ??
    //     console.log('Editing car ', index);
    //     this.setState({
    //         editId: index
    //     });
    //     console.log('this.state in CarTool',this.state);
        
    // }

    // deleteCar = (index) => {
    //     this.setState({
    //         cars: this.state.cars.filter(c => c.id !== index),
    //         editId: -1,
    //     })
    // }

    // replaceCar = (car) => {
    //     const newCars = this.state.cars.concat();
    //     const carIndex = this.state.cars.findIndex(c => c.id === car.id);
    //     newCars[carIndex] = car;

    //     this.setState({
    //         cars: newCars,
    //         editId: -1,
    //     })

    // }

    // cancelCar = () => {
    //     this.setState({
    //         editId: -1
    //     });
    // }

    render() {
        return <>
            <ToolHeader headerText="Car T00L" />
            <CarTable cars={this.props.cars} editId={this.props.editId} 
                onEditCar={this.props.editCar} onDeleteCar={this.props.deleteCar}
                onSaveCar={this.props.replaceCar} onCancelCar={this.props.cancelCar}/>
            <CarForm buttonText="Add Car" onSubmitCar={this.props.addCar}/>
        </>;
    }
}