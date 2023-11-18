import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const RegisterModal = (props) => {
    return (
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
                <h4></h4>
                <p>
                    Your registration is successful. A verification mail is sent to you. Click on the link to verify your email and login.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to='/'>
                    <Button onClick={props.onHide}>Close</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
}

export default RegisterModal