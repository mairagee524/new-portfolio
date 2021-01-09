import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <div className="hr-line line2 glass">
                    <div className="inner2"/>
                </div>
                <h2 className="about-head">Maira <mark className="mark2">Garcia</mark></h2>
                <p>Full Stack Developer</p>
                <br></br>
                <p className="p10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id neque lobortis, maximus turpis vel, gravida erat. Phasellus nec mauris laoreet, sagittis urna quis, semper ligula. Curabitur aliquet sit amet ex eu dictum. Vivamus condimentum nisi in purus aliquet venenatis. Donec et lorem mi. Etiam nec luctus tortor. Pellentesque id sagittis tellus. Aliquam odio libero, maximus et dapibus et, aliquam at nulla. Nam eget interdum nisl, imperdiet ornare sapien. Morbi sed lacus ac magna lobortis elementum. Fusce a ex varius, egestas risus vitae, maximus odio. Fusce iaculis mauris in sem accumsan, at vehicula ipsum fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam quis cursus metus.</p>
                <div className="edu">
                    <div className="back1 back2">
                        <i className="fa fa-book i1 i3"/>
                    </div>
                </div>
                <h3>Education</h3>
                <div className="vr-line glass">
                    <div className="vr-inner inn1"/>
                    <div className="vr-inner inn2"/>
                </div>
                <h4>Certificate in Full-Stack Web Development</h4>
                <p className="p1">UCLA Extension</p>
                <p className="p1">
                    <i className="fa fa-calendar i2"/>
                    March - September 2020
                </p>
                <h4>Double B.A. in Chicana/o Studies and Spanish Linguistics</h4>
                <p className="p1">UCLA</p>
                <p className="p1">
                    <i className="fa fa-calendar i2"/>
                    September 2013 - June 2017
                </p>

                <h3 className="sk_head">Skills</h3>
                <div className="sk glass">HTML</div>
                <div className="sk s2 glass">CSS</div>
                <div className="sk s3 glass">JavaScript</div>
                <div className="sk s4 glass">React</div>
                <div className="sk s5 glass">Node</div>
                <div className="sk s6 glass">Express</div>
                <div className="sk s6 glass">MySQL</div>
                <div className="sk s6 glass">MongoDB</div>
                <div className="sk s6 glass">HandleBars</div>
                <div className="sk s6 glass">jQuery</div>
                <div className="sk s6 glass">Git</div>
                <div className="sk s6 glass">Heroku</div>
            </div>
        )
    }
}
    
export default About;
    