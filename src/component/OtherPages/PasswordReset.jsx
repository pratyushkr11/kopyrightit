import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import './PasswordReset.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PasswordModel from './PasswordModel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from 'react-spinners';

const PasswordReset = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [modaldata, setModalData] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const errRef = useRef();

    const handleSubmit = () => {
        setLoading(true); // Set loading to true while waiting for the API response

        const generatedOTP = Math.floor(100000 + Math.random() * 900000);

        axios
            .post('http://localhost:3001/pass-reset/sendotp', { email, generatedOTP })
            .then((result) => {
                setLoading(false); // Set loading to false after receiving the response
                setModalShow(true);
                setModalData({ email, generatedOTP });
            })
            .catch((err) => {
                setLoading(false); // Set loading to false if there's an error
                if (!err?.response) {
                    toast.error('No Server Response');
                } 
                else if (err.response?.status === 500) {
                    toast.error('User Not Found');
                } else {
                    toast.error('User Not Found');
                }
                errRef.current.focus();
            });
    };

    return (
        <>
            <section>
                <ToastContainer />
                <div className='header-menu'>
                    <img className='logo-img' src={logo} alt='app-logo' />
                    <Link to='/'>
                        <button type='button' className='btn btn-toRegister'>
                            Login
                        </button>
                    </Link>
                </div>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>Enter Your Email</h1>
                    </div>
                    <div className='form'>
                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Address'
                            />
                        </div>
                        <button className='btn btn-send' onClick={handleSubmit}>
                            {loading ? <BeatLoader size={8} color='#fff' /> : 'Send'}
                        </button>
                    </div>
                    <PasswordModel show={modalShow} onHide={() => setModalShow(false)} modaldata={modaldata} />
                </div>
            </section>
        </>
    );
};

export default PasswordReset;
