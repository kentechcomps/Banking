import React , { useState } from 'react'
import { BrowserRouter, Routes, Route  , Navigate} from 'react-router-dom';
import Login from './Components/Login'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Deposit from './Components/Deposit';
import AccountDetailsModal from './Components/Viewbalance';
import Redirect from './Components/Redirect';
import NavigationBar from './Components/Navbar';
import viewbalancefunc from './Components/Home'




function App() {

  const [AccountNo ,setAccountNo] = useState("")
  const [Accountbalance , setAccountbalance] = useState("")
  const [Firstname , setFirstname] = useState("")
  const[Lastname , setLastname] = useState("")
  const[Pin , setPin] = useState("")
  const[jwToken , setjwToken] = useState("")
  const[Isloggedin , setIsLoggedin] = useState(false)
  const[Btntext , setBtntext] = useState("Login")
  
  return (
    < div>
     
    <BrowserRouter>
    <NavigationBar    
    Firstname = {Firstname}
    jwToken = {jwToken}
    setjwToken = {setjwToken}
    Isloggedin = {Isloggedin}
    setIsLoggedin = {setIsLoggedin}
    Btntext = {Btntext}
    setFirstname={setFirstname}
    setBtntext = {setBtntext}
    />
    <Routes>
    <Route path='/' element= {<Home
        AccountNo = {AccountNo}
        Accountbalance = {Accountbalance}
        Firstname = {Firstname}
        Lastname = {Lastname}
        Pin = {Pin}
      
      />}/>
      <Route path= '/Login' element= {<Login
      setAccountNo ={setAccountNo}
      setAccountbalance = {setAccountbalance}
      setFirstname = {setFirstname}
      setLastname = {setLastname}
      jwToken ={jwToken}
      setjwToken = {setjwToken}
      setPin = {setPin}
      setBtntext={setBtntext}
      setIsLoggedin={setIsLoggedin}
      />}/>
      <Route path='/Signup' element= {<Signup/>}/>
      
      <Route path='/Deposit' element= {
      AccountNo === "" ?(
        <>
        <Navigate to= "/redirect"/>
        </>
      ) : (
        <Deposit/>
      ) 
      }/>
      <Route path= '/redirect' element = {<Redirect/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
 