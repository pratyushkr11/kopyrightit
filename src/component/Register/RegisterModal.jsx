import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterModal = (props) => {
  const [enteredOTP, setEnteredOTP] = useState('');
  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    const trimmedOTP = enteredOTP.trim(); // Trim the entered OTP
    if (trimmedOTP === props.modaldata.generatedOTP.toString()) {
      handleRegistration();
    } else {
      toast.error('Incorrect OTP');
    }
  };

  const handleRegistration = () => {
    const name = props.modaldata.name.toString();
    const email = props.modaldata.email.toString();
    const password = props.modaldata.password.toString();
    axios
      .post("https://kopyrightit-backend-zdfw.onrender.com/signup", { name, email, password, isVerified: true })
      .then((result) => {
        toast.success('OTP Verified. Please click SignIn');
        props.onHide();
      })
      .catch(err => {
        if (!err?.response) {
          toast.error('No Server Response');
        } else {
          toast.error('Signup Failed');
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registration Successful
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Verify OTP</h4>
          <p>Your registration has been successfully completed. An email containing an OTP for verification has been sent to your email address.</p>
          <p>Please enter the OTP sent to your email:</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={enteredOTP}
            onChange={(e) => setEnteredOTP(e.target.value)}
            style={{ borderRadius: '5px', paddingLeft: '10px' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleVerifyOTP}>Verify OTP</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;