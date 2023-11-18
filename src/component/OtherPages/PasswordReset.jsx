import { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo2.png';
// import axios from '../../api/axios'
import './PasswordReset.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PasswordReset = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    // const setVal = (e) => {
    //     setEmail(e.target.value)
    // }

    // // const sendLink = async (e) => {
    // //     e.preventDefault();

    // //     if (email === "") {
    // //         toast.error("email is required!", {
    // //             position: "top-center"
    // //         });
    // //     } else if (!email.includes("@")) {
    // //         toast.warning("includes @ in your email!", {
    // //             position: "top-center"
    // //         });
    // //     } else {
    // //         const response = await axios.post("/forget-password",
    // //             { email }
    // //         );

    // //         if (response.status === 200) {
    // //             setEmail("");
    // //             setMessage(true)
    // //         } else {
    // //             toast.error("This Email ID does not exist", {
    // //                 position: "top-center"
    // //             })
    // //         }
    //     }
    // }

    const sendPasswordResetEmail = () => {
        axios.post('https://kopyrightit-backend-zdfw.onrender.comapi/send-reset-email', { email })
            .then(result => {
                window.alert("Password reset Email Sent")
                navigate("/")
                if (result.data) {
                } else {
                    console.log('failed');
                }
            })
            .catch(err => {
                if (!err?.response) {
                    console.log('No Server Response');
                }
                else {
                    console.log('Login Failed');
                }
                errRef.current.focus();
            });
    };

    return (
        <>
            <section>
                <div className='header-menu'>
                    <img className="logo-img" src={logo} alt="app-logo" />
                    <Link to="/">
                        <button type="button" className="btn btn-toRegister">Login</button>
                    </Link>
                </div>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Enter Your Email</h1>
                    </div>

                    {/* {message ? <p style={{ color: "green", fontWeight: "bold" }}>Pasword reset link send successfully in your email</p> : ""} */}
                    <form className='form'>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>

                        <button className='btn btn-send' onClick={sendPasswordResetEmail} >Send</button>
                    </form>
                    {/* <ToastContainer /> */}
                </div>
            </section>
        </>
    )
}

export default PasswordReset
