import React from 'react';

import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = ({ cars, editId, onEditCar, onDeleteCar, onSaveCar, onCancelCar }) => {
    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {cars.map((car) => (car.id !== editId) ? 
            <ViewCarRow key={car.id} carRow={car} onEditCar={onEditCar} onDeleteCar={onDeleteCar}/> : 
            <EditCarRow key={car.id} carRow={car} onSaveCar={onSaveCar} onCancelCar={onCancelCar}/>)}
        </tbody>
    </table>        
}

// = ({ cars }) => {
    // return <table>
    //     <thead>
    //         <tr>
    //             <th>Id</th>
    //             <th>Make</th>
    //             <th>Model</th>
    //             <th>Year</th>
    //             <th>Color</th>
    //             <th>Price</th>
    //             <th>Actions</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {cars.map((car) => <ViewCarRow key={car.id} carRow={car} onDelete/>)}
    //     </tbody>
    // </table>
// }