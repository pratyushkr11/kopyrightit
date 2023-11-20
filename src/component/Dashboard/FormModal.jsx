import React from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

import './FormModal.css'


const FormModal = (props) => {
    const navigate = useNavigate();

    const { setIsOpen, contentLabel, isOpen, forms } = props;
    console.log(forms)
    function closeModal() {
        setIsOpen(false);
        navigate('/dashboard')
    }

    return (
        <div>
            <Modal isOpen={isOpen} contentLabel={contentLabel}>
                <h2>
                    <u>Form Details</u>
                </h2>
                <div className="admin-form-modal">
                <div className="admin_modal__form">
        <label htmlFor="option">
          <b>Dairy No: </b>
        </label>
        <input
          placeholder="Enter Dairy No"
          type="text"
          id="dairy-no"
          value={forms.dairyNo}
          disabled
        />
      </div>
      <div className="admin_modal__form">
      <label htmlFor="status">
          <b>Status: </b>
        </label>
        <select
          id="status"
          value={forms.status}
          disabled
        >
            <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Application Submitted">Application Submitted</option>
          <option value="Approved">Approved</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
                    <div className='admin_modal__form'>
                        <label htmlFor='option'><b>What type of copyright are you registering? </b></label>
                        <input
                            placeholder="Selected option"
                            type="text"
                            id='option'
                            autoComplete="off"
                            value={forms.form1.option}
                            required
                            disabled
                        ></input>
                    </div>
                    <div className='admin_modal__form'>
                        <label htmlFor='name'><b>Applicant's First Name: </b></label>
                        <input
                            placeholder="Enter Your Full Name"
                            type="text"
                            id='name'
                            autoComplete="off"
                            required
                            value={forms.form1.name}
                            disabled
                        ></input>
                    </div>
                    <div className='admin_modal__form'>
                        <label htmlFor='name'><b>Applicant's Middle Name: </b></label>
                        <input
                            placeholder="Enter Your Full Name"
                            type="text"
                            id='name'
                            autoComplete="off"
                            value={forms.form1.name1}
                            disabled
                        ></input>
                    </div>
                    <div className='admin_modal__form'>
                        <label htmlFor='name'><b>Applicant's Last Name: </b></label>
                        <input
                            placeholder="Enter Your Full Name"
                            type="text"
                            id='name'
                            autoComplete="off"
                            required
                            value={forms.form1.name2}
                            disabled
                        ></input>
                    </div>
                    <div className='admin_modal__form'>
                        <label htmlFor='mail'><b>Applicant's Email ID: </b></label>
                        <input
                            placeholder="Enter Your email"
                            type="email"
                            id='mail'
                            autoComplete="off"
                            required
                            value={forms.form1.mail}
                            disabled
                        ></input>
                    </div>
                    <div className='admin_modal__form'>
                        <label htmlFor='address'><b>Applicant's Address: </b></label>
                        <input
                            placeholder="Enter Your Address"
                            type="text"
                            id='address'
                            autoComplete="off"
                            required
                            value={forms.form1.address}
                            disabled
                        ></input>
                    </div>
                    <div className='admin_modal__form'>
                        <label htmlFor='mobile'><b>Mobile Number: </b></label>
                        <input
                            placeholder="+91-XXXXX-XXXXX"
                            type="text"
                            id='mobile'
                            autoComplete="off"
                            required
                            value={forms.form1.mobile}
                            disabled
                        ></input>
                    </div>
                    <div className='location_data'>
                        <div>
                            <label htmlFor='country'><b>Country: </b></label>
                            <input
                                placeholder="Enter the country"
                                type="text"
                                id='country'
                                autoComplete="off"
                                required
                                value={forms.form1.country}
                                disabled
                            ></input>
                        </div>
                        <div>
                            <label htmlFor='state'><b>State: </b></label>
                            <input
                                placeholder="Enter the state"
                                type="text"
                                id='state'
                                autoComplete="off"
                                required
                                value={forms.form1.state}
                                disabled
                            ></input>
                        </div>
                    </div>
                    <div className='location_data2'>
                        <div>
                            <label htmlFor='city'><b>City: </b></label>
                            <input
                                placeholder="Enter the City"
                                type="text"
                                id='city'
                                autoComplete="off"
                                required
                                value={forms.form1.city}
                                disabled
                            ></input>
                        </div>
                        <div>
                            <label htmlFor='zip'><b>Zip: </b></label>
                            <input
                                placeholder="Enter the Zip Code"
                                type="text"
                                id='zip'
                                autoComplete="off"
                                required
                                value={forms.form1.zip}
                                disabled
                            ></input>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className='admin_modal__radio'>
                        <label htmlFor='isOriginalWork'><b>Is the work to be registered an original work?</b></label>
                        <p>
                            <input
                                id='isOriginalWork'
                                value="yes"
                                type="radio"
                                disabled
                                checked={forms.form2.isOriginalWork === true}
                            />Yes</p>
                        <p>
                            <input
                                id='isOriginalWork'
                                value="no"
                                type="radio"
                                disabled
                                checked={forms.form2.isOriginalWork === false}
                            /> No</p>
                    </div>
                    {forms.form2.isOriginalWork === 'no' ? (
                        <div className='conditional-conatiner text-center'>
                            <div className='admin_modal__form'>
                                <label htmlFor='workTranslation'><b>Translation of the work in public domain: </b></label>
                                <input
                                    placeholder='Enter details'
                                    type="text"
                                    id='workTranslation'
                                    autoComplete="off"
                                    required
                                    value={forms.form2.workTranslation}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form'>
                                <label htmlFor='workTranslationCopyright'><b>Translation of the work in which copyright subsists: </b></label>
                                <input
                                    placeholder='Enter details'
                                    type="text"
                                    id='workTranslationCopyright'
                                    autoComplete="off"
                                    required
                                    value={forms.form2.workTranslationCopyright}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form'>
                                <label htmlFor='workAdaption'><b>An adaption of work in the public domain: </b></label>
                                <input
                                    placeholder='Enter details'
                                    type="text"
                                    id='workAdaption'
                                    autoComplete="off"
                                    value={forms.form2.workAdaption}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form'>
                                <label htmlFor='workAdaptionCopyright'><b>An adaption of the work in which copyright subsists: </b></label>
                                <input
                                    placeholder='Enter details'
                                    type="text"
                                    id='workAdaptionCopyright'
                                    autoComplete="off"
                                    required
                                    value={forms.form2.workAdaptionCopyright}
                                    disabled
                                />
                            </div>
                        </div>
                    ) : null}
                </div>
                <hr style={{ width: '100%' }} />
                <div>
                    <div className='admin_modal__form3'>
                        <label htmlFor='particularsNatureOfWork'><b>Nature of the applicant's interest in the copyright of the work</b></label>
                        <input
                            placeholder='Enter details'
                            type="text"
                            id='particularsNatureOfWork'
                            autoComplete="off"
                            required
                            value={forms.form3.particularsNatureOfWork}
                            disabled
                        />
                    </div>
                    <div className='admin_modal__form3'>
                        <label htmlFor="particularsClassOfWork"><b>Class of the work</b></label>
                        <input
                            placeholder='Enter details'
                            type="text"
                            id='particularsClassOfWork'
                            autoComplete="off"
                            required
                            value={forms.form3.particularsClassOfWork}
                            disabled
                        />
                    </div>
                    <div className='admin_modal__form3'>
                        <label htmlFor='particularsDescription'><b>Description of the work</b></label>
                        <input
                            placeholder='Enter details'
                            type="text"
                            id='particularsDescription'
                            autoComplete="off"
                            required
                            value={forms.form3.particularsDescription}
                            disabled
                        />
                    </div>
                    <div className='admin_modal__form3'>
                        <label htmlFor='particularsTitle'><b>Title of the work</b></label>
                        <input
                            placeholder='Enter title of work'
                            type="text"
                            id='particularsTitle'
                            autoComplete="off"
                            required
                            value={forms.form3.particularsTitle}
                            disabled
                        />
                    </div>
                    <div className='admin_modal__form3'>
                        <label style={{ paddingTop: '12px' }} htmlFor='particularsLanguageOfWork'><b>Language of the work</b></label>
                        <input
                            placeholder='Enter language of work'
                            type="language"
                            id='particularsLanguageOfWork'
                            autoComplete="off"
                            required
                            value={forms.form3.particularsLanguageOfWork}
                            disabled
                        />
                    </div>
                </div>
                <div>
                    <div className='admin_modal__radio'>
                        <label htmlFor='isAuthorAlive' style={{ paddingTop: '10px' }}><b>Is the author alive?</b></label>
                        <p>
                            <input
                                id='isAuthorAlive'
                                value="yes"
                                type="radio"
                                disabled
                                checked={forms.form3.isAuthorAlive === true}
                            />Yes
                        </p>
                        <p>
                            <input
                                id='isAuthorAlive'
                                value="no"
                                type="radio"
                                disabled
                                checked={forms.form3.isAuthorAlive === false}
                            />{" "}
                            No
                        </p>
                    </div>
                    {forms.form3.isAuthorAlive === 'yes' ? (
                        <div className='admin-modal-yes__container'>
                            <div className='admin_modal__form3'>
                                <label htmlFor='particularsNameOfAuthor'><b>Name of the author</b></label>
                                <input
                                    placeholder='Enter Name'
                                    type="text"
                                    id='particularsNameOfAuthor'
                                    autoComplete="off"
                                    required
                                    value={forms.form3.particularsNameOfAuthor}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form3'>
                                <label htmlFor='particularsAddressOfAuthor'><b>Address of the author</b></label>
                                <input
                                    placeholder='Enter address'
                                    type="text"
                                    id='particularsAddressOfAuthor'
                                    autoComplete="off"
                                    required
                                    value={forms.form3.particularsAddressOfAuthor}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form3'>
                                <label htmlFor='particularsNationalityOfAuthor'><b>Nationality of the author</b></label>
                                <input
                                    placeholder='Enter details'
                                    type="text"
                                    id='particularsNationalityOfAuthor'
                                    autoComplete="off"
                                    required
                                    value={forms.form3.particularsNationalityOfAuthor}
                                    disabled
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='admin-modal-no__conatiner'>
                            <div className='admin_modal__form3'>
                                <label htmlFor='particularsDateOfDecease'><b>Date of his Decease</b></label>
                                <input
                                    style={{ paddingRight: '10px' }}
                                    placeholder='Enter Date (DD/MM/YYYY)'
                                    type="date"
                                    id='particularsDateOfDecease'
                                    autoComplete="off"
                                    required
                                    value={new Date(forms.form3.particularsDateOfDecease).toLocaleDateString()}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form3'>
                                <label htmlFor='particularsNameOfAuthor'><b>Name of the author</b></label>
                                <input
                                    placeholder='Enter Name'
                                    type="text"
                                    id='particularsNameOfAuthor'
                                    autoComplete="off"
                                    required
                                    value={forms.form3.particularsNameOfAuthor}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form3'>
                                <label htmlFor='particularsAddressOfAuthor'><b>Address of the author</b></label>
                                <input
                                    placeholder='Enter address'
                                    type="text"
                                    id='particularsAddressOfAuthor'
                                    autoComplete="off"
                                    required
                                    value={forms.form3.particularsAddressOfAuthor}
                                    disabled
                                />
                            </div>
                            <div className='admin_modal__form3'>
                                <label htmlFor='particularsNationalityOfAuthor'><b>Nationality of the author</b></label>
                                <input
                                    placeholder='Enter details'
                                    type="text"
                                    id='particularsNationalityOfAuthor'
                                    autoComplete="off"
                                    required
                                    value={forms.form3.particularsNationalityOfAuthor}
                                    disabled
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className='btn-closeModal'>
                    <Button onClick={closeModal} variant="contained" size="medium" sx={{ width: '180px' }}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default FormModal;