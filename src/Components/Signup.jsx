import React , {useState} from "react"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'
import './Login.css'



const Signup = ()=>{

  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Accountnumber, setAccountnumber] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate()
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/banking/signup', {
        Firstname: Firstname,
        Lastname: Lastname,
        Accountnumber: Accountnumber,
        password: password
      });
      history("/")
      Swal.fire({
        title: "Login",
        text: "Login Successful!",
        icon: "success"
      });

      console.log(response.data); // Assuming the backend responds with a message
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error('Error:', error);
      
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      // Handle error, e.g., show an error message to the user
    }
  };
    
  return(
    <div id='Logindiv' className="d-flex justify-content-center align-items-center vh-100"
     >
<form id= "form" className="row g-3 justify-content-center align-items-center" style={{
      display: 'flex' ,
      flexDirection: 'column', 
      textAlign: 'center' ,
      borderRadius:'20px' ,
      width: '50%',
      height: '50%'
     }}>

  <label for="inputEmail4" className="form-label" style={{
    color : 'red'
  }}>Create an Account</label>
    <div className="col-md-6" 
  style={
    {
      width : '80%'
    }
  }
  >
    <label for="inputEmail4" className="form-label">Firstname</label>
    <input type="text" className="form-control" id="inputEmail4"
    onChange={(e) => setFirstname(e.target.value)}
    ></input>
  </div>
  <div className="col-md-6" 
  style={
    {
      width : '80%'
    }
  }
  >
    <label for="inputEmail4" className="form-label">Lastname</label>
    <input type="text" className="form-control" id="inputEmail4"
    onChange={(e) => setLastname(e.target.value)}
    ></input>
  </div>

  <div className="col-md-6" 
  style={
    {
      width : '80%'
    }
  }
  >
    <label for="inputEmail4" className="form-label">AccountNo</label>
    <input type="text" className="form-control" id="inputEmail4"
    onChange={(e) => setAccountnumber(e.target.value)}
    ></input>
  </div>
  <div className="col-md-6"
     style={
      {
        width : '80%'
      }
    }
  >
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"
    onChange={(e) => setPassword(e.target.value)}
    ></input>
  </div>
  

  
    <button className="btn btn-primary"
     style={
      {
        width : '80%'
      }
    }
    onClick={handleSignup}
    >Sign in</button>

</form>
    </div>


    
)
}
export default Signup ;
