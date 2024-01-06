import React , {useState} from "react";
import axios from 'axios';
import Changepin from '../assets/changepin.svg'
import Deposit from '../assets/deposit.svg'
import images from '../assets/images.png'
import tips from '../assets/tips.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import NavigationBar from "./Navbar";

import { Link } from "react-router-dom";




const Home = ( {
 AccountNo , Accountbalance ,Firstname ,Lastname ,Pin
})=>{


  const [showTips, setShowTips] = useState(false);
  const [tipsContent, setTipsContent] = useState('');

console.log(AccountNo );

const viewbalancefunc = () => {
  Swal.fire({
    title: 'Account Details',
    html: `
      <p>Account Number: ${AccountNo}</p>
      <p>Account Balance: ${Accountbalance}</p>
      <p>First Name: ${Firstname}</p>
      <p>Last Name: ${Lastname}</p>
  
    `,
    icon: "success"
  });
};

const changepin = async () => {
  try {
    const old_password= prompt("Enter old password:");
    const new_password= prompt("Enter new PIN:");

    console.log(old_password);
    console.log(new_password);

    const response = await axios.post('https://bankingbackend-3x7g.onrender.com/changepassword', {
      Accountno: AccountNo,
      old_password: old_password,
      new_password: new_password,
    });

    Swal.fire({
      title: 'Success!',
      icon: 'success',
      confirmButtonText: 'OK',
    });

  } catch (error) {
    Swal.fire({
      title: 'Error!',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};

const financialtips =() => {
   // You can fetch financial tips from an API or define them here
   const tips = "Save consistently, invest wisely, and create a budget.";

   // Set the tips content and show the card
   setTipsContent(tips);
   setShowTips(true);
}


    return(
  <div>
    <NavigationBar    
    Firstname = {Firstname}

    />
      <div className="text-center">
            
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto"
            style={{
                marginTop : '40px' ,
                width: '40%',
                height: '10%'
            }}

            >
  <div className="col">
    <div className="card">
      <img src={Deposit} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title" >Deposit</h5>
         <Link to="/Deposit"  state={{ AccountNo}}>
             <FontAwesomeIcon icon={faArrowRight} />
             <p>View more</p>
        </Link>
                
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Changepin} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Balance Enq</h5>
        
             <FontAwesomeIcon icon={faArrowRight}  onClick={viewbalancefunc}/>
             <p>View more</p>
      
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={images} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Change Pin</h5>
       
             <FontAwesomeIcon icon={faArrowRight} onClick={changepin} />
             <p>View more</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={tips} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Financial Tips</h5>
        
             <FontAwesomeIcon icon={faArrowRight} onClick={financialtips} />
             <p>View more</p>
       
      </div>
    </div>
  </div>
</div>

        </div>

        {showTips && (
          <div  
          className="financial-tips-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
          >
              <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Financial Tips</h5>
            <p className="card-text">{tipsContent}</p>
            <a href="#" className="card-link" onClick={() => setShowTips(false)}>Close</a>
          </div>
        </div>
          </div>
      
      )}   

  </div>
      

    )
}
export default Home;