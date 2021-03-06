import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <p className="hello-world">Hello world, I am</p>
                <h1>Maira <mark>Garcia</mark></h1>
                <ReactTypingEffect className="typingeffect" text={['Bilingual Full-Stack Engineer','Los Angeles Native','Collaborator']} speed={100} eraseDelay={900}/>
                <div className="hr-line glass">
                    <div className="hr-inner" />
                </div>
                <Social />
            </div>
        )
    }
}
    
export default Home;
    