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





function App() {

  const [AccountNo ,setAccountNo] = useState("")
  const [Accountbalance , setAccountbalance] = useState("")
  const [Firstname , setFirstname] = useState("")
  const[Lastname , setLastname] = useState("")
  const[Pin , setPin] = useState("")


  return (
    < div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Login
      setAccountNo ={setAccountNo}
      setAccountbalance = {setAccountbalance}
      setFirstname = {setFirstname}
      setLastname = {setLastname}
      setPin = {setPin}
      />}/>
      <Route path='/Signup' element= {<Signup/>}/>
      <Route path='/Home' element= {<Home
        AccountNo = {AccountNo}
        Accountbalance = {Accountbalance}
        Firstname = {Firstname}
        Lastname = {Lastname}
        Pin = {Pin}
      
      />}/>
      <Route path='/Deposit' element= {<Deposit      />}/>
      <Route path='/Viewbalance' element= {<AccountDetailsModal/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
 