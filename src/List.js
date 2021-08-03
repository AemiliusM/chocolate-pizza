import React, { Component } from 'react';


class List extends Component {
    render() { 
        return ( 
          <label>
              <input type='checkbox'/>
              <span>{this.props.food}</span>
              <span>{this.props.portion}</span> 
          </label>
         );
    }
}
 
export default List;