import React, { Component } from 'react';
import vanPic from './van-pic.png';
class Author extends Component {
    render() { 
        return ( 
            <section>
                 <div className="border"></div>

            <div id="author-bio"> 
            <img src={vanPic} alt="Vanessa Stevenson"/> 
            <div id='bio'>
                <h4>Vanessa Stevenson</h4> 
                <h5>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</h5> 
            </div>
            <a href className="share-recipe">Share Recipe</a> 
            </div>
            </section>
         );
    }
}
 export default Author;
