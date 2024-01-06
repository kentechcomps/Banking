import React ,{useState} from "react";
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'



const Deposit = ()=>{


const history = useNavigate()
const location = useLocation();
const {AccountNo} = location.state;
const [formData, setFormData] = useState({
  Accountno: AccountNo , 
  Accountbalance: ""
})

const handleSubmit = (event) =>{
    event.preventDefault()
    fetch('http://127.0.0.1:5000/banking/deposit' ,{
  
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
  
 
  Swal.fire({
    title: "Deposit",
    text: "Thank you ",
    icon: "success"
  });
  history("/Home")
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
      }}>Deposit</label>
      <div className="col-md-6" 
      style={
        {
          width : '80%'
        }
      }
      >
        <label for="inputEmail4" className="form-label"></label>
        <input type="text" className="form-control" id="inputEmail4"
             onChange={(event) => {
              setFormData({ ...formData, Accountbalance: event.target.value });
         }}
        ></input>
      </div>
    
      
      <button type="button" class="btn btn-primary btn-sm" 
          style={
            {
              width : '80%'
            }
          }
      onClick={handleSubmit} >Deposit</button>
    <button type="button" class="btn btn-secondary btn-sm"
      style={
        {
          width : '80%'
        }
      }>
        
       Back</button> 
      

  
    </form>
        </div>
)
}

export default Deposit;