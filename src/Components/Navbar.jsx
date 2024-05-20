import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink  , Navigate, useNavigate} from 'react-router-dom';
import logo from '../assets/user.png'
import './Navbar.css'; // Import a CSS file for custom styles
import Login from './Login';

const NavigationBar = ({Firstname , 
   setFirstname ,
   jwToken ,
   setjwToken ,
   setIsLoggedin ,
   Isloggedin ,
   Btntext ,
   setBtntext}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const history = useNavigate()

  const tologin =()=>{
     history("/Login")
  }

  const logoutHandler = () =>{
    if(Isloggedin){
      setBtntext("Login")
      localStorage.removeItem("jwToken")
      setjwToken("")
      setFirstname("")
      setIsLoggedin(false)
      history("/Login")
    }
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container"
        >
           <NavLink exact="true" to="/" className="nav-logo">
      <img src={logo} alt="Masinga Constituency" />
    </NavLink>
          <NavLink exact= "true" to="/" className="nav-logo">
            <span style={{
              fontSize: '20px',
              fontWeight: 'bolder' ,
              marginLeft: '5px'
            }}>KENTECH M-BANKING SYSTEM</span>
            {/* <i className="fas fa-code"></i> */}
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='Loginbtn' >
  <button style={{
    backgroundColor: '#007bff',
    borderRadius: '5px',
    padding: '10px 20px',
    marginRight: '30px',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }} onClick={
    ()=>(
      Isloggedin? logoutHandler() : history("/Login")
    )
  }>{Btntext}</button>


            </li>
            <li className="nav-item">
              
                <FontAwesomeIcon icon={faUser} style={{
                    color :'black'
                }}/> Welcome 👋 
        
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
