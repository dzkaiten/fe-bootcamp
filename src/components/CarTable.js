import React from 'react';

import { ViewCarRow } from './ViewCarRow';

export const CarTable = ({ cars }) => {
    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {cars.map((car) => <ViewCarRow key={car.id} carRow={car}/>)}
        </tbody>
    </table>
}