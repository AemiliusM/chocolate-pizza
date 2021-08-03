import React, { Component } from 'react';
import steps from './steps.js';
import List from './List.js';

class ListRender extends Component {
    render() { 
        return ( 
            <div className='list-div'>
            {steps.map(food => <List portion={food.portion} food={food.food} />)}
            </div>
         );
    }
}
 
export default ListRender;