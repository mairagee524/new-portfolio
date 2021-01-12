import React, { Component } from 'react';
import Social from '../Social';
import Map from '../../img/los-angeles-map.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me</h1>
                <div className="hr-line line2 glass">
                    <div className="inner2 inner3"/>
                </div>
                <div className="con-out glass">
                    <img src={Map} className="map" alt="Los Angeles in Google Maps"/>
                </div>
                <a href="https://drive.google.com/file/d/1IX2iH7IHw_hOii4QV7ySlXCNawJhzFHo/view?usp=sharing">
                    <div className="back3 glass">Resume</div>
                </a>
                <a href="mailto:mairagarcia.codes@gmail.com">
                    <div className="back3 back4 glass">Email Me</div>
                </a>
                <div className="hr-line line3 glass">
                    <div className="inner3"/>
                </div>
                <Social />
            </div>
        )
    }
}
    
export default Contact;