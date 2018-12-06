// 4. Create a new component named ViewCarRow. 
// The view car row will display a row of car data. 
// Utilize the ViewCarRow component in CarTable component to 
// display the car data.

import React from 'react';

export const ViewCarRow = ( {carRow} ) => {
    return <tr key={carRow.id}>
        <td>{carRow.id}</td>
        <td>{carRow.make}</td>
        <td>{carRow.model}</td>
        <td>{carRow.year}</td>
        <td>{carRow.color}</td>
        <td>{carRow.price}</td>
    </tr>
}