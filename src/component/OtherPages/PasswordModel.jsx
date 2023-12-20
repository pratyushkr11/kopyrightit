import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const PasswordModel = (props) => {
  const [enteredOTP, setEnteredOTP] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const handleVerifyOTP = () => {
    // Verify the entered OTP against the generated OTP
    if (enteredOTP === props.modaldata.generatedOTP.toString()) {
      // Show password change form if OTP is valid
      setShowPasswordChange(true);
    } else {
      // Handle incorrect OTP using toast
      toast.error('Invalid OTP. Please try again.', {
        position: 'top-center',
      });
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();

    if (newPassword === '' || confirmPassword === '') {
      toast.error('Both new and confirm password are required!', {
        position: 'top-center',
      });
    } else if (newPassword !== confirmPassword) {
      toast.error('New and confirm password must match!', {
        position: 'top-center',
      });
    } else {
      // Send a request to change the password
      try {
        const response = await axios.post('http://localhost:3001/api/change-password', {
          email: props.modaldata.email,
          newPassword,
        });
        if (response.status === 200) {
          // Password changed successfully
          toast.success('Your password has been reset successfully!', {
            position: 'top-center',
          });
          setShowPasswordChange(false);
          props.onHide();
        } else {
          // Handle password reset failure
          toast.error('Password reset failed', {
            position: 'top-center',
          });
        }
      } catch (error) {
        // console.error(error);

        // Handle any API errors
        toast.error('Password reset failed', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Verify OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showPasswordChange ? (
          <div className="password-change-form">
            <p>Please enter your new password:</p>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <>
            <p>Please enter the OTP sent to your email:</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={enteredOTP}
              onChange={(e) => setEnteredOTP(e.target.value)}
            />
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {showPasswordChange ? (
          <Button onClick={resetPassword}>Reset Password</Button>
        ) : (
          <>
            <Button onClick={handleVerifyOTP}>Verify OTP</Button>
            <Button onClick={props.onHide}>Close</Button>
          </>
        )}
      </Modal.Footer>
      <ToastContainer /> {/* To display error messages */}
    </Modal>
  );
};

export default PasswordModel;
