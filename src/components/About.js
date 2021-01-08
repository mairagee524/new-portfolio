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
                <p className="p10">
                    I started my journey in the world of computers from an young age, now I’m 21 years old, Pursuing my Computer Science and Engineering Degree in GNDEC Ludhiana.  Web development is my center of interest, i always love the idea of cross-platform development, 1-n one code base deploy into almost any platform, which web technology like Javascript enables me to do. I also like creating Interactive UI components for better UX  and share those design and codes to the world through Github and Instagram.
                </p>
                <div className="edu">
                    <div class="back1 back2">
                        <i class="fa fa-book i1 i3"/>
                    </div>
                </div>
                <h3>Education</h3>
                <div className="vr_line glass">
                    <div className="vr_inner inn1"/>
                    <div className="vr_inner inn2"/>
                </div>
                <h4>Certificate in Full-Stack Web Development</h4>
                <p className="p1">UCLA Extension</p>
                <p className="p1">
                    <i class="fa fa-calendar i2"/>
                    March - September 2020
                </p>
                <h4>Double B.A. in Chicana/o Studies and Spanish Linguistics</h4>
                <p className="p1">UCLA</p>
                <p className="p1">
                    <i class="fa fa-calendar i2"/>
                    September 2013 - June 2017
                </p>

                <h3 class="sk_head">Skills</h3>
                <div class="sk glass">HTML</div>
                <div class="sk s2 glass">CSS</div>
                <div class="sk s3 glass">JavaScript</div>
                <div class="sk s4 glass">React</div>
                <div class="sk s5 glass">Node</div>
                <div class="sk s6 glass">Express</div>
                <div class="sk s6 glass">MySQL</div>
                <div class="sk s6 glass">MongoDB</div>
                <div class="sk s6 glass">HandleBars</div>
                <div class="sk s6 glass">jQuery</div>
                <div class="sk s6 glass">Git</div>
                <div class="sk s6 glass">Heroku</div>
            </div>
        )
    }
}
    
export default About;
    