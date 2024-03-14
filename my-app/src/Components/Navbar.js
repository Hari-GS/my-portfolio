import {Component} from "react";
import "./NavbarStyles.css";
import { NavLink } from 'react-router-dom';
import logo from '../assets/portfolio logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown , faAnglesUp  } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component{

    constructor(props) {
        super(props);
        this.state = {
          isMenuOpen: false,
        };
      }

      toggleMenu = () => {
          this.setState({isMenuOpen: !this.state.isMenuOpen})
        }


    render(){
        const iconSize="2x"

        return(
            <div className="navbar">
                <img className="heading" src={logo} alt="Logo" />
                <div className="small-screen-only-container">
                <div className="menu-icon" onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={this.state.isMenuOpen ? faAnglesUp : faAnglesDown} size={iconSize}/>
                </div>
            <nav className="Navbaritems">
                <ul className={this.state.isMenuOpen?"nav-menu-open":"nav-menu-close"}>
                   <NavLink className="options" to="/">
                        Home
                   </NavLink>
                   <NavLink className="options" to="/projects">
                        Projects
                   </NavLink>
                   <NavLink className="options" to="/about">
                        About
                   </NavLink>
                </ul>
            </nav>
                </div>
                
            </div>
            
        )
    }
}

export default Navbar;