import React, {Component} from 'react';
import { MenuItem } from './MenuItem';
import './style.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar-items'>
                <h1 className='navbar-logo'><i className="fab fa-react"></i></h1>
                <div className='menu-icon'>

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