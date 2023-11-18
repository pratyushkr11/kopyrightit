import { useRef, useState, useEffect } from "react";
import RegisterModal from "./RegisterModal";
import axios from "axios";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PasswordStrengthBar from "react-password-strength-bar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import GoogleLogin from "../Login/GoogleLogin";

import "./Register.css";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showMatchPassword, setShowMatchPassword] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidMail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    // e.preventDefault();
    axios
      .post("https://kopyrightit-backend-zdfw.onrender.comsignup", { name, email, password })
      .then((result) => {
        setModalShow(true);
      })
      .catch(err => {
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 500) {
          setErrMsg('Email Already Present');
          setModalShow(false);
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      });

  };

  return (
    <>
      <div className="app__container">
        <div className="header-menu">
          <img className="app-img" src={logo} alt="app-logo" />
          <Link to="/">
            <button type="button" className="btn btn-signin">
              Sign In
            </button>
          </Link>
        </div>
        <div className="app__box">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="header">Welcome to IPgyan</h1>
          <h2 className="header2">Register to get started</h2>
          <form onSubmit={handleSubmit}>
            <div className="app__fields">
              <label htmlFor="name">Full Name : </label>
              <input
                className="form__input"
                placeholder="Your Name"
                type="text"
                id="name"
                ref={userRef}
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="app__fields">
              <label htmlFor="email">Email ID : </label>
              <input
                className="form__input"
                placeholder="name@example.com"
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setMail(e.target.value)}
                value={email}
                required
                aria-invalid={validMail ? "false" : "true"}
                aria-describedby="mailnote"
                onFocus={() => setMailFocus(true)}
                onBlur={() => setMailFocus(false)}
              ></input>
              <span className={validMail ? "valid" : "hide"}>
                {" "}
                <FontAwesomeIcon icon={faCheck} />{" "}
              </span>
              <span className={validMail || !email ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <p
                id="mailnote"
                className={mailFocus && !validMail ? "offscreen" : "offscreen"}
              ></p>
            </div>
            <div className="app__fields">
              <label htmlFor="password">Password : </label>
              <input
                className="form__input"
                placeholder="Your Password"
                id="password"
                type={showPassword ? "text" : "password"}
                required
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                style={{ marginLeft: '165px' }}
              ></input>
              <span
                className={`password-toggle ${showPassword ? "visible" : ""}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                <VisibilityIcon sx={{ cursor: 'pointer', position: 'absolute', right: '160px', top: '28px' }} />
              </span>
              <span className={validPwd ? "valid" : "hide"}>
                {" "}
                <FontAwesomeIcon icon={faCheck} />{" "}
              </span>
              <span className={validPwd || !password ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number, and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
            </div>
            <PasswordStrengthBar
              style={{ width: "43%", marginLeft: "27rem" }}
              password={password}
            />
            <div className="app__fields">
              <label htmlFor="confirm_pwd">Confirm Password : </label>
              <input
                className="form__input"
                placeholder="Confirm password"
                type={showMatchPassword ? "text" : "password"}
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                style={{ marginLeft: '80px' }}
              ></input>
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                {" "}
                <FontAwesomeIcon icon={faCheck} />{" "}
              </span>
              <span
                className={`password-toggle ${showMatchPassword ? "visible" : ""}`}
                onClick={() => setShowMatchPassword(!showMatchPassword)}
              >
                <VisibilityIcon sx={{ cursor: 'pointer', position: 'absolute', right: '160px', top: '28px' }} />
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                style={{ border: "solid 1px" }}
                onChange={() => setCheckboxChecked(!checkboxChecked)}
              />
              <label
                className="form-check-label box"
                htmlFor="flexCheckDefault"
              >
                I agree to IPgyan's{" "}
                <span style={{ color: "blue" }}>
                  <u>Terms & Conditions</u>
                </span>
              </label>
            </div>
            <RegisterModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className="register-btn">
              <button
                className="btn btn-primary btn-lg btn-register"
                disabled={!validMail || !validPwd || !validMatch || checkboxChecked}
              >
                Register
              </button>
            </div>
          </form>
          <div className="signin">
            <p>
              Already a user?
              <Link to="/" style={{ color: "blue" }}>
                <u>Log In Here</u>
              </Link>
            </p>
          </div>
          <div className="lines">
            <hr />
            <p className="or">OR</p>
            <hr />
          </div>
          <div className="social-btn"><GoogleLogin /></div>
        </div>
      </div>
    </>
  );
};

export default Register;