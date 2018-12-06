// Bonus: Create a new component named UnorderedList which accepts an 
// array of items (strings) and displays the list. 
// Utilize the UnorderedList in Color Tool replacing the current list.

import React from 'react';

export const UnorderedList = ({ items }) => {
    return <ul>
        {items.map((color, index) => <li key={index}>{color}</li>)}
    </ul>
}