import React from 'react';

export class EditCarRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.carRow.id,
            make: props.carRow.make,
            model: props.carRow.model,
            year: props.carRow.year,
            color: props.carRow.color,
            price: props.carRow.price
        }
    }

    change = e => {
        this.setState({
            [ e.target.name ]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
        }, () => {
            console.log('Change in EditCarRow', this.state);
        })
    }

    render() {
        return <tr>
            <td>{this.state.id}</td>
            <td><input type="text" id="edit-make" name="make" value={this.state.make} onChange={this.change}/></td>
            <td><input type="text" id="edit-model" name="model" value={this.state.model} onChange={this.change}/></td>
            <td><input type="number" id="edit-year" name="year" value={this.state.year} onChange={this.change}/></td>
            <td><input type="text" id="edit-color" name="color" value={this.state.color} onChange={this.change}/></td>
            <td><input type="number" id="edit-price" name="price" value={this.state.price} onChange={this.change}/></td>
            <td>
                {/* <button type="button" onClick={() => onEditSave(this.state.id)}>Save</button> */}
                <button type="button">Save</button>
                {/* <button type="button" onClick={() => onEditCancel(this.state.id)}>Cancel</button> */}
                <button type="button">Cancel</button>
            </td>
        </tr>
    }

}

// = ({ carRow, onEditCar }) => {