import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social glass">
                <div className="btn-social btn1">
                    <a href="https://github.com/mairagee524" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"/>
                    </a>
                </div>
                <div className="btn-social btn2">
                    <a href="https://twitter.com/latinacoder24" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"/>
                    </a>
                </div>
                <div className="btn-social btn3">
                    <a href="https://www.linkedin.com/in/mairagarcia524/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Social;