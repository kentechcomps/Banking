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
      const response = await axios.post('https://bankingbackend-3x7g.onrender.com/signup', {
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create an Account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            FirstName
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setFirstname(e.target.value)}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            LastName
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setLastname(e.target.value)}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Accountno
          </label>
          <div className="mt-2">
            <input
              
              onChange={(e) => setAccountnumber(e.target.value)}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
                           </label>
            
          </div>
          <div className="mt-2">
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleSignup}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already registered?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        <Link to="/Login" >Login</Link>
        </a>
      </p>
    </div>
  </div>


  )
}
export default Signup ;



    