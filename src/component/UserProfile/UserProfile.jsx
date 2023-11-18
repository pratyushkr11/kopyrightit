import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import ProfilePic from '../../assets/profile-pic.jpg'

import './UserProfile.css'

const UserProfile = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pic, setPic] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picMessage, setPicMessage] = useState();

    const postDetails = (pics) => {
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "notezipper");
            data.append("cloud_name", "piyushproj");
            fetch("", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(pic);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return setPicMessage("Please Select an Image");
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='profile-container'>
            <div><Navbar /></div>
            <div className='profile-box'>
                <u><h1>Account Info</h1></u>
                <div>
                    <Row className='profileContainer'>
                        <Col md={6}>
                            <Form onSubmit={submitHandler}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="pic">
                                    <Form.Label>Change Profile Picture</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(e) => postDetails(e.target.files[0])}
                                    />
                                </Form.Group>
                                <Button type="submit" varient="primary" style={{ marginTop: '20px' }}>
                                    Update
                                </Button>

                            </Form>
                        </Col>
                        <Col style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <img src={ProfilePic} alt='proifle-pic' className="profilePic" />

                        </Col>
                    </Row>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default UserProfile

