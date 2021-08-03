import React, { Component } from 'react';
import smallLogo from './small-logo.png'

class Footer extends Component {
    render() { 
        return ( 
            <footer> 
        <section> 
            <img src={smallLogo} alt="small delicious logo"/> 
        </section> 
        <section><p>Delicious @copy 2013 * All Rights Reserved.</p>
            <p>Proudly published with Ghost.</p>
        </section>
        </footer>
         );
    }
}
 
export default Footer;