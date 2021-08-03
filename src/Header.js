import React, { Component } from 'react';

import logoIcon from './logo.png';
import faceBookIcon from './facebook-icon.png'; 
import flickrIcon from './flickr-icon.png';
import twitterIcon from './twitter-icon.png';
import googleIcon from './google-icon.png';
import pintIcon from './pint-icon.png';
import rssIcon from './rss-icon.png';
import mailIcon from './mail-icon.png';

 
class Header extends Component {
    render() { 
        return ( 
            <header>
                <section className='head-left'>
                    <div className='head-icon'>
                    <img alt= '' src={logoIcon}></img>
                    </div>
                    <div className='head-title'>
                        <h3 className='delish'>Delicious</h3>
                        <h2 className='head-text'>THE BEST FOOD ON THE WEB.</h2>
                    </div>
                </section>
                <section className='head-right'>
                    <div className='logos'>
                <img alt='FB' src= {faceBookIcon}/>
                <img alt='FLCK' src= {flickrIcon}/>
                <img alt='TWT' src= {twitterIcon}/>
                <img alt='GLG' src= {googleIcon}/>
                <img alt='PNT' src= {pintIcon}/>
                <img className='rss' alt='RSS' src= {rssIcon}></img>
                <img alt='MAIL' src= {mailIcon}></img>
                    </div>
                    <div className='contacts'>
                        <a href='index.html' className='rss icon'> </a>
                        <a href='mailto:chocolatepizza@delicious.comm' className='mail'> </a>
                    </div>
                </section>
            </header>
         );
    }
}
 
export default Header ;