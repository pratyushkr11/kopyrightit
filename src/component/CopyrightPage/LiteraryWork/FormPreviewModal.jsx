import Modal from 'react-modal';
import './FormPreviewModal.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const FormPreviewModal = (props) => {
    const { data, setIsOpen, contentLabel, isOpen } = props;

    const navigate = useNavigate();

    const { fileKey1, imageKey1 } = data.keyValue;
    //   console.log(fileKey1)
    //   console.log(imageKey1)

    const setLiteraryWorkData = async (data) => {

        axios
            .post("https://kopyrightit-backend-zdfw.onrender.comform", data)
            .then((result) => {
                //   console.log(result);
                navigate("/dashboard");
            })
            .catch((err) => console.log(err));
    };

    const handleSave = (e) => {
        setLiteraryWorkData(data);
        alert('Data Saved Successfully');
    };

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal isOpen={isOpen} contentLabel={contentLabel}>
                <h2 className="text-center">
                    <u>Form Details</u>
                </h2>
                <div className="form-modal">
                    <div className='modal__form'>
                        <label htmlFor='name'><b>What type of copyright are you registering? </b></label>
                        <input
                            placeholder="Enter Your Full Name"
                            type="text"
                            id='option'
                            autoComplete="off"
                            required
                            value={data.form1.option}
                            disabled
                        ></input>
                    </div>
                    <div className='modal__form'>
                        <label htmlFor='name'><b>Applicant's First Name: </b></label>
                        <input
                            placeholder="Enter Your Full Name"
                            type="text"
                            id='name'
                            autoComplete="off"
                            required
                            value={data.form1.name}
                            disabled
                        ></input>
                    </div>
                    <div className='modal__form'>
                        <label htmlFor='name'><b>Applicant's Middle Name: </b></label>
                        <input
                            placeholder="Enter Your Full Name"
                            type="text"
                            id='name1'
                            autoComplete="off"
                            required
                            value={data.form1.name1}
                            disabled
                        ></input>
                    </div>
                    <div className='modal__form'>
                        <label htmlFor='name'><b>Applicant's Last Name: </b></label>
                        <input
                            placeholder="Enter Your Full Name"
                            type="text"
                            id='name2'
                            autoComplete="off"
                            required
                            value={data.form1.name2}
                            disabled
                        ></input>
                    </div>
                    <div className='modal__form'>
                        <label htmlFor='mail'><b>Applicant's Email ID: </b></label>
                        <input

                            placeholder="Enter Your email"
                            type="email"
                            id='mail'
                            autoComplete="off"
                            required
                            value={data.form1.mail}
                            disabled
                        ></input>
                    </div>
                    <div className='modal__form'>
                        <label htmlFor='address'><b>Applicant's Address: </b></label>
                        <input
                            placeholder="Enter Your Address"
                            type="text"
                            id='address'
                            autoComplete="off"
                            required
                            value={data.form1.address}
                            disabled
                        ></input>
                    </div>
                    <div className='modal__form'>
                        <label htmlFor='mobilenumber'><b>Mobile Number: </b></label>
                        <input
                            placeholder="+91-XXXXX-XXXXX"
                            type="mobilenumber"
                            id='mobile'
                            autoComplete="off"
                            required
                            value={data.form1.mobile}
                            disabled
                        ></input>
                    </div>
                    <div className="modal_container">
                        <div className="modal__fields">
                            <label htmlFor='country'><b>Country: </b></label>
                            <div style={{ width: '300px' }}>
                                <input
                                    style={{ height: '40px', width: '280px' }}
                                    placeholder="Enter the country"
                                    type="text"
                                    id='country'
                                    autoComplete="off"
                                    required
                                    value={data.form1.country}
                                    disabled
                                ></input>
                            </div>
                            <label htmlFor='state'><b>State: </b></label>
                            <div style={{ width: '300px' }}>
                                <input
                                    style={{ height: '40px', width: '280px' }}
                                    placeholder="Enter the state"
                                    type="text"
                                    id='state'
                                    autoComplete="off"
                                    required
                                    value={data.form1.state}
                                    disabled
                                ></input>
                            </div>
                        </div>
                        <div className="modal__fields">
                            <label htmlFor='city'><b>City: </b></label>
                            <div style={{ width: '300px' }}>
                                <input
                                    style={{ height: '40px', width: '280px' }}
                                    placeholder="Enter the city"
                                    type="text"
                                    id='city'
                                    autoComplete="off"
                                    required
                                    value={data.form1.city}
                                    disabled
                                ></input>
                            </div>
                            <label style={{ position: 'relative', right: '60px' }} htmlFor='zipcode'><b>ZIP: </b></label>
                            <input style={{ position: 'relative', right: '100px' }}
                                placeholder="Enter Your ZIP"
                                type="code"
                                id='zip'
                                autoComplete="off"
                                required
                                value={data.form1.zip}
                                disabled
                            ></input>
                        </div>
                    </div>
                </div>
                <hr style={{ width: '100%' }} />
                <div>
                    <div className='modal-radio-btn'>
                        <label htmlFor='text'><b>Is the work to be registered an original work?</b></label>
                        <div>
                            <p style={{ fontWeight: '500', fontSize: '18px' }}>
                                <input
                                    id='isOriginalWork'
                                    checked={data.form2.isOriginalWork === "yes"}
                                    value="yes"
                                    type="radio"
                                    disabled
                                />Yes</p>
                            <p style={{ fontWeight: '500', fontSize: '18px' }}>
                                <input
                                    id='isOriginalWork'
                                    checked={data.form2.isOriginalWork === "no"}
                                    value="no"
                                    type="radio"
                                    disabled
                                />{" "}
                                No</p>
                        </div>
                    </div>
                    <div>
                        {data.form2.isOriginalWork === "no" ? (
                            <div className='conditional-conatiner text-center'>
                                <div className='modal__form'>
                                    <label htmlFor='workTranslation'><b>Translation of the work in public domain: </b></label>
                                    <input
                                        placeholder='Enter details'
                                        type="text"
                                        id='workTranslation'
                                        autoComplete="off"
                                        required
                                        value={data.form2.workTranslation}
                                        disabled
                                    />
                                </div>
                                <div className='modal__form'>
                                    <label htmlFor='workTranslationCopyright'><b>Translation of the work in which copyright subsists: </b></label>
                                    <input
                                        placeholder='Enter details'
                                        type="text"
                                        id='workTranslationCopyright'
                                        autoComplete="off"
                                        required
                                        value={data.form2.workTranslationCopyright}
                                        disabled
                                    />
                                </div>
                                <div className='modal__form'>
                                    <label htmlFor='workAdaption'><b>An adaption of work in the public domain: </b></label>
                                    <input
                                        placeholder='Enter details'
                                        type="text"
                                        id='workAdaption'
                                        autoComplete="off"
                                        required
                                        value={data.form2.workAdaption}
                                        disabled
                                    />
                                </div>
                                <div className='modal__form'>
                                    <label htmlFor='workAdaptionCopyright'><b>An adaption of the work in which copyright subsists: </b></label>
                                    <input
                                        placeholder='Enter details'
                                        type="text"
                                        id='workAdaptionCopyright'
                                        autoComplete="off"
                                        required
                                        value={data.form2.workAdaptionCopyright}
                                        disabled
                                    />
                                </div>
                            </div>
                        ) :
                            <div className='text-center' style={{ paddingTop: '30px' }}>
                            </div>}
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div>
                        <div className='modal__form3'>
                            <label htmlFor='particularsNatureOfWork'><b>Nature of the applicant's interest in the copyright of the work</b></label>
                            <input placeholder='Enter details'
                                type="text"
                                id='particularsNatureOfWork'
                                autoComplete="off"
                                required
                                value={data.form3.particularsNatureOfWork}
                                disabled />
                        </div>
                        <div className='modal__form3'>
                            <label htmlFor="particularsClassOfWork"><b>Class of the work</b></label>
                            <input
                                placeholder='Enter details'
                                type="text"
                                id='particularsClassOfWork'
                                autoComplete="off"
                                required
                                value={data.form3.particularsClassOfWork}
                                disabled
                            />
                        </div>
                        <div className='modal__form3'>
                            <label htmlFor='particularsDescription'><b>Description of the work</b></label>
                            <input
                                placeholder='Enter details'
                                type="text"
                                id='particularsDescription'
                                autoComplete="off"
                                required
                                value={data.form3.particularsDescription}
                                disabled
                            />
                        </div>
                        <div className='modal__form3'>
                            <label htmlFor='particularsTitle'><b>Title of the work</b></label>
                            <input placeholder='Enter title of work'
                                type="text"
                                id='particularsTitle'
                                autoComplete="off"
                                required
                                value={data.form3.particularsTitle}
                                disabled />
                        </div>
                        <div className='modal__form3'>
                            <label style={{ paddingTop: '12px' }} htmlFor='particularsLanguageOfWork'><b>Language of the work</b></label>
                            <input
                                placeholder='Enter language of work'
                                type="language"
                                id='particularsLanguageOfWork'
                                autoComplete="off"
                                required
                                value={data.form3.particularsLanguageOfWork}
                                disabled
                            />
                        </div>
                    </div>
                    <div>
                        <div className='app__question modal-condition'>
                            <label htmlFor='text' style={{ paddingTop: '10px' }}><b>Is the author alive?</b></label>
                            <div className='app__option'>
                                <input
                                    id='isAuthorAlive'
                                    checked={data.form3.isAuthorAlive === "yes"}
                                    value="yes"
                                    type="radio"
                                    disabled
                                />Yes
                                <input
                                    id='isAuthorAlive'
                                    checked={data.form3.isAuthorAlive === "no"}
                                    value="no"
                                    type="radio"
                                    disabled
                                />{" "}
                                No
                            </div>
                        </div>
                        <div>
                            {data.form3.isAuthorAlive === "yes" ? (
                                <div className='modal-yes__container'>
                                    <div className='modal__form3'>
                                        <label htmlFor='particularsNameOfAuthor'><b>Name of the author</b></label>
                                        <input
                                            placeholder='Enter Name'
                                            type="text"
                                            id='particularsNameOfAuthor'
                                            autoComplete="off"
                                            required
                                            value={data.form3.particularsNameOfAuthor}
                                            disabled
                                        />
                                    </div>
                                    <div className='modal__form3'>
                                        <label htmlFor='particularsAddressOfAuthor'><b>Address of the author</b></label>
                                        <input
                                            placeholder='Enter address'
                                            type="text"
                                            id='particularsAddressOfAuthor'
                                            autoComplete="off"
                                            required
                                            value={data.form3.particularsAddressOfAuthor}
                                            disabled
                                        />
                                    </div>
                                    <div className='modal__form3'>
                                        <label htmlFor='particularsNationalityOfAuthor'><b>Nationality of the author</b></label>
                                        <input
                                            placeholder='Enter details'
                                            type="text"
                                            id='particularsNationalityOfAuthor'
                                            autoComplete="off"
                                            required
                                            value={data.form3.particularsNationalityOfAuthor}
                                            disabled
                                        />
                                    </div>
                                </div>
                            ) :
                                <div>
                                    <div className='modal-no__conatiner'>
                                        <div className='modal__form3'>
                                            <label htmlFor='particularsDateOfDecease'><b>Date of his Decease</b></label>
                                            <input
                                                style={{ paddingRight: '10px' }}
                                                placeholder='Enter Date (DD/MM/YYYY)'
                                                type="date"
                                                id='particularsDateOfDecease'
                                                autoComplete="off"
                                                required
                                                value={data.form3.particularsDateOfDecease}
                                                disabled
                                            />
                                        </div>
                                        <div className='modal__form3'>
                                            <label htmlFor='particularsNameOfAuthor'><b>Name of the author</b></label>
                                            <input
                                                placeholder='Enter Name'
                                                type="text"
                                                id='particularsNameOfAuthor'
                                                autoComplete="off"
                                                required
                                                value={data.form3.particularsNameOfAuthor}
                                                disabled
                                            />
                                        </div>
                                        <div className='modal__form3'>
                                            <label htmlFor='particularsAddressOfAuthor'><b>Address of the author</b></label>
                                            <input
                                                placeholder='Enter address'
                                                type="text"
                                                id='particularsAddressOfAuthor'
                                                autoComplete="off"
                                                required
                                                value={data.form3.particularsAddressOfAuthor}
                                                disabled
                                            />
                                        </div>
                                        <div className='modal__form3'>
                                            <label htmlFor='particularsNationalityOfAuthor'><b>Nationality of the author</b></label>
                                            <input
                                                placeholder='Enter details'
                                                type="text"
                                                id='particularsNationalityOfAuthor'
                                                autoComplete="off"
                                                required
                                                value={data.form3.particularsNationalityOfAuthor}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around' style={{ margin: 'auto', padding: '10px 0' }}>
                    <button onClick={closeModal} className="btn btn-danger btn-closeModal">
                        Close
                    </button>
                    <button className="btn btn-primary btn-save" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default FormPreviewModal;
