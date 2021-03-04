import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <div className="hr-line line2 glass">
                    <div className="inner2"/>
                </div>
                <p className="p10">As a double Bruin alumna (UCLA'17 & UNEX'20), I find ways to add to my knowledge while benefitting communities. That is why I volunteer as a Lead Front-End developer for a start-up called Prentus. There, my team and I are developing a website that matches recent bootcamp grads (like myself!) to mentors so that they are able to work on a project. My long-term goal is to create a form of technology that would assist underserved communities.</p>
                <br />
                <p className="p10">In short, I am always up for a challenge when developing new applications. I enjoy learning something new everyday! It is interesting to see how many things you can create with just a couple lines of code! When I am not coding, I am either bullet journaling, going on nature walks, working out, or living my life at a concert.</p>           
                <div className="experience">
                    <div className="edu exp-box">
                        {/* <div className="back1 back2">
                            <i className="fa fa-book i1 i3"/>
                        </div> */}
                        <h3>Education</h3>
                        {/* <div className="vr-line glass">
                            <div className="vr-inner inn1"/>
                            <div className="vr-inner inn2"/>
                        </div> */}
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
                    </div>

                    <div className="exp-box">
                        <h3>Skills</h3>
                        <div className="skill-box">
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
                            <div className="sk s6 glass">REST API's</div>
                            <div className="sk s6 glass">AJAX</div>
                            <div className="sk s6 glass">Bootstrap</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default About;
    