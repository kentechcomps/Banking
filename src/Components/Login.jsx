import React  from "react"
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Login.css'
import { useState } from 'react'



const Login = ({setAccountNo,setAccountbalance,setFirstname , setLastname ,setPin ,jwToken , setjwToken , setIsLoggedin , setBtntext ,Isloggedin
})=>{
const history = useNavigate()


const [formData, setFormData] = useState({
  Accountnumber: "", 
  password: ""
});

const [loading, setLoading] = useState(false);

const handleSubmit = (event) =>{
  event.preventDefault()

fetch('https://bankingbackend-3x7g.onrender.com/banking/login' ,{
  
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
   
  localStorage.setItem("jwtToken" , data.access_token)

  
  
  setAccountNo(data.Accountnumber)
  setAccountbalance(data.Accountbalance)
  setFirstname(data.Firstname)
  setLastname(data.Lastname)
  setPin(data.Pin)

  
  setBtntext(`Logout , ${data.Firstname}`)



  history("/")
  setIsLoggedin(true)
  setjwToken(data.access_token)
  Swal.fire({
    title: "Login",
    text: "Login Successful!",
    icon: "success"
  });
 
})


  
}


    return(

      <div 
      
      >

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Accountnumber
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={(event) => {
                  setFormData({ ...formData, Accountnumber: event.target.value });
              }}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Pin 
                             </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                onChange={(event) => {
                  setFormData({ ...formData, password: event.target.value });
             }}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Dont have account?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          <Link to="/Signup" >Register Here</Link>
          </a>
        </p>
      </div>
    </div>
      


      </div>
      
      
      
      

     


)
    
    

}
export default Login ;












































































































































  
       <div id='Logindiv' classNameName="d-flex justify-content-center align-items-center vh-100"
          >
     <form id= "form" classNameName="row g-3 justify-content-center align-items-center" style={{
           display: 'flex' ,
           flexDirection: 'column', 
           textAlign: 'center' ,
           borderRadius:'20px' ,
          width: '50%',
           height: '50%'
          }}>

       <label for="inputEmail4" classNameName="form-label" style={{
         color : 'red'
       }}>Kindly Login to your account</label>
       <div classNameName="col-md-6" 
       style={
         {
           width : '80%'
         }
       }
       >
         <label for="inputEmail4" classNameName="form-label">AccountNo</label>
      <input type="text" classNameName="form-control" 
        
         

        ></input>
       </div>
       <div classNameName="col-md-6"
          style={
           {
             width : '80%'
           }
         }
       >
         <label for="inputPassword4" classNameName="form-label">Pin</label>
         <input type="password" classNameName="form-control" id="inputPassword4"
         
         ></input>
       </div>
      
    
      
         <button classNameName="btn btn-primary" 
          style={
           {
           width : '80%'
           }
         }
         >Login in</button>
         <p>Don't have an account?  <Link to="/Signup" >Register Here</Link> </p>
  
     </form>
         </div>
    
    
        
   
