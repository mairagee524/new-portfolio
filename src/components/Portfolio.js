import React, { Component } from 'react';
import Project1 from '../img/project1.png';
import Project2 from '../img/Project2.png';
import Project3 from '../img/Project3.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Work</h1>
                <div className="hr-line line2 glass">
                    <div className="inner2 inner3"/>
                </div>
                <div className="port-out port1 glass">
                    <a href="https://github.com/zcorpuz/behlendorfLaw">
                        <img src={Project1} className="po1" alt="ramdom project pic"/>
                    </a>
                </div>
                <div className="port-out port2 glass">
                    <a href="https://github.com/zcorpuz/soma_kitchen">
                        <img src={Project2} className="po1" alt="ramdom project pic"/>
                    </a>
                </div>
                <div className="port-out port3 glass">
                    <a href="https://github.com/mairagee524/weather-dashboard">
                        <img src={Project3} className="po1" alt="ramdom project pic"/>
                    </a>
                </div>
            </div>
        )
    }
}
    
export default Portfolio;