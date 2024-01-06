import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '../assets/user.png'
import './Navbar.css'; // Import a CSS file for custom styles

const NavigationBar = ({Firstname}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container"
        >
           <NavLink exact to="/" className="nav-logo">
      <img src={logo} alt="Masinga Constituency" />
    </NavLink>
          <NavLink exact to="/" className="nav-logo">
            <span style={{
              fontSize: '20px',
              fontWeight: 'bolder' ,
              marginLeft: '5px'
            }}>KENTECH M-BANKING SYSTEM</span>
            {/* <i className="fas fa-code"></i> */}
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              
         
                <FontAwesomeIcon icon={faUser} style={{
                    color :'black'
                }}/> Welcome 👋 {Firstname}
        
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                 <FontAwesomeIcon icon={faHamburger} />
              </span>
            ) : (
              <span className="icon">
                <FontAwesomeIcon icon={faHamburger}/>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
    
  
  );
};
export default NavigationBar
