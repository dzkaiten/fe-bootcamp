import React from 'react'
import { omit } from 'lodash';

import { ToolHeader } from './ToolHeader'
import { CarTable } from './CarTable'

export class CarTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: props.cars.concat(),
            make: '',
            model: '',
            year: 1950,
            color: '',
            price: 0
        }
    }

    change = e => {

        this.setState({
            [ e.target.name ]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
        }, () => {
            console.log(this.state);
        })
    }

    addCar = () => {
        this.setState({
            cars: this.state.cars.concat({
                id: Math.max(...this.state.cars.map(c => c.id), 0) + 1,
                ...omit(this.state, ['cars']), 
            }),
            

            make: '',
            model: '',
            year: 1950,
            color: '',
            price: 0
        })
    }

    render() {
        return <>
            <ToolHeader headerText="Car T00L" />
            <CarTable cars={this.state.cars}/>

            <form>
                <div>
                    <label htmlFor="new-make-input">New Make: </label>                    
                    <input type="text" id="new-make-input" name="make" value={this.state.make} onChange={this.change} />
                </div>
                <div>
                    <label htmlFor="new-model-input">New Model: </label>                    
                    <input type="text" id="new-model-input" name="model" value={this.state.model} onChange={this.change} />
                </div>
                <div>
                    <label htmlFor="new-year-input">New Year: </label>                    
                    <input type="number" id="new-year-input" name="year" value={this.state.year} onChange={this.change} />
                </div>
                <div>                    
                    <label htmlFor="new-Color-input">New Color: </label>                    
                    <input type="text" id="new-color-input" name="color" value={this.state.color} onChange={this.change} />
                    
                </div>
                <div>                    
                    <label htmlFor="new-price-input">New Price: </label>
                    <input type="number" id="new-price-input" name="price" value={this.state.price} onChange={this.change} />
                </div>
                <div>
                    <button type="button" onClick={this.addCar}>Add Car</button>
                </div>
            </form>
        </>;
    }
}