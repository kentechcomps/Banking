import { useState } from 'react';
import { useLocation } from "react-router-dom";



const AccountDetailsModal = () => {
  
  const location = useLocation();
  const {AccountNo,Accountbalance ,Firstname ,Lastname ,Pin} = location.state;



  return (
    <div className="modal" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-boviewbalancefuncdy">
          <h4>Account No</h4><p>{AccountNo}</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AccountDetailsModal;
