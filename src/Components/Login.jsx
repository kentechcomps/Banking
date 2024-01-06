import React  from "react"
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Login.css'
import { useState } from 'react'



const Login = ({setAccountNo,setAccountbalance,setFirstname , setLastname ,setPin 
})=>{
const history = useNavigate()


const [formData, setFormData] = useState({
  Accountnumber: "", 
  Pin: ""
});

const [loading, setLoading] = useState(false);

const handleSubmit = (event) =>{
  event.preventDefault()

fetch('http://127.0.0.1:5000/banking/login' ,{
  
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify(formData),
})
.then((response) => {
  if (!response.ok) {
    throw new Error("Response was not ok");
  }
  return response.json();
})
.then((data) => {
  console.log("Response data:", data);

  setAccountNo(data.Accountnumber)
  setAccountbalance(data.Accountbalance)
  setFirstname(data.Firstname)
  setLastname(data.Lastname)
  setPin(data.Pin)

  history("/Home")
  Swal.fire({
    title: "Login",
    text: "Login Successful!",
    icon: "success"
  });
 
})


  
}


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
      }}>Kindly Login to your account</label>
      <div className="col-md-6" 
      style={
        {
          width : '80%'
        }
      }
      >
        <label for="inputEmail4" className="form-label">AccountNo</label>
        <input type="text" className="form-control" 
        
        onChange={(event) => {
          setFormData({ ...formData, Accountnumber: event.target.value });
     }}

        ></input>
      </div>
      <div className="col-md-6"
         style={
          {
            width : '80%'
          }
        }
      >
        <label for="inputPassword4" className="form-label">Pin</label>
        <input type="password" className="form-control" id="inputPassword4"
        onChange={(event) => {
          setFormData({ ...formData, Pin: event.target.value });
     }}
        ></input>
      </div>
      
    
      
        <button className="btn btn-primary" onClick={handleSubmit}
         style={
          {
            width : '80%'
          }
        }
        >Login in</button>
        <p>Don't have an account?  <Link to="/Signup" >Register Here</Link> </p>
  
    </form>
        </div>
    
    
        
    )
    
    

}
export default Login ;
