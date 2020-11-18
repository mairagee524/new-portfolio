import React, {Component} from 'react';
import { MenuItem } from './MenuItem';
import './style.css'

class Navbar extends Component {
    state = { clicked: false }



    render() {
        return (
            <nav className='navbar-items'>
                <h1 className='navbar-logo'><i className="fab fa-react"></i></h1>
                <div className='menu-icon' onCLick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul>
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;