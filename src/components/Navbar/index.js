import React, {Component} from 'react';
import MenuItem from './MenuItem';
import ProfilePic from '../img/profile-pic.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            'MenuItemActive':''
        }
    }

    activeitem= (x) => {
        if(this.state.MenuItemActive.length>0){
            document.getElementById(this.state.MenuItemActive).classList.remove('active');
        }
        this.setState({'MenuItemActive':x},()=>{
            document.getElementById(this.state.MenuItemActive).classList.add('active');
        });
    };

    render() {
        return (
            <nav className="glass">
                <img src={ProfilePic} className="profile-pic" alt="image of girl inside a circle"/>
                <h2>Hello World,</h2>
                <h2>I am Maira <mark>Garcia</mark></h2>
                <p>Bilingual Full-Stack Developer</p>
                <ul>
                    <MenuItem item="Home" tolink="/" activec={this.activeitem}/>
                    <MenuItem item="About" tolink="/about" activec={this.activeitem}/>
                    <MenuItem item="Portfolio" tolink="/portfolio" activec={this.activeitem}/>
                    <MenuItem item="Testimonial" tolink="/testimonial" activec={this.activeitem}/>
                    <MenuItem item="Contact" tolink="/contact" activec={this.activeitem}/>
                </ul>
            </nav>
            )
        }
    }    

// class Navbar extends Component {
//     state = { clicked: false }

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }

//     render() {
//         return (
//             <nav className='navbar-items'>
//                 <h1 className='navbar-logo'><i className="fab fa-react"></i></h1>
//                 <div className='menu-icon' onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItem.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <a className={item.className} href={item.url}
//                                 >
//                                     {item.title}
//                                 </a>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </nav>
//         )
//     }
// }

export default Navbar;