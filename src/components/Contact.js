import React, { Component } from 'react';
import Social from './Social';
import Map from '../img/map.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me</h1>
                <div className="hr-line line2 glass">
                    <div className="inner2 inner3"/>
                </div>
                <div className="con-out glass">
                    <img src={Map} className="co1" alt="image of Los Angeles in Google Maps"/>
                </div>
                <a href="#">
                    <div className="back3 glass">Download Resume</div>
                </a>
                <a href="mailto:mairagarcia.codes@gmail.com">
                    <div className="back3 back4 glass">Contact Me</div>
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