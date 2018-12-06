// 4. Create a new component named ViewCarRow. 
// The view car row will display a row of car data. 
// Utilize the ViewCarRow component in CarTable component to 
// display the car data.

import React from 'react';

// const person = {
//     firstName: 'Bob',
//     lastName: 'Smith',
// }

// const { firstName, lastName } = person;

// const props = {
//     carRow: whateverCar,
//     onDeleteCar: () => {}
// }

// ViewCarRow(props);

export const ViewCarRow = ( {carRow, onDeleteCar } ) => {

    const deleteCar = () => {
        onDeleteCar(carRow.id);
    }

    return <tr>
        <td>{carRow.id}</td>
        <td>{carRow.make}</td>
        <td>{carRow.model}</td>
        <td>{carRow.year}</td>
        <td>{carRow.color}</td>
        <td>{carRow.price}</td>
        <td>
            <div>
                <button type="button" onClick={deleteCar}>Delete</button>
            </div>
        </td>
    </tr>
}