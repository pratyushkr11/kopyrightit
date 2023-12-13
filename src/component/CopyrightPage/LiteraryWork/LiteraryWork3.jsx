/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import './LiteraryWork3.css';

const LiteraryWork3 = (props) => {
    const { data, tab, setData, setTab } = props;

    const handleChange = (e) => {
        setData({
            ...data,
            form3: {
                ...data.form3,
                [e.target.id]: e.target.value
            }
        });
    }

    const handleBack = (e) => {
        e.preventDefault();
        setTab(tab - 1);
    }

    const handleNext = (e) => {
        e.preventDefault();
        setTab(tab + 1);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='main__container'>
                <Navbar />
                <div className='form-container3' style={{ marginTop: '50px' }}>
                    <h2 className='text-center'><u>Statement Of Particulars</u></h2>
                    <div className='questions'>
                        <form>
                            <div className='question__container'>
                                <div>
                                    <label htmlFor='particularsNatureOfWork'>Nature of the applicant&apos;s interest in the copyright of the work</label>
                                    <input
                                        placeholder='Enter details'
                                        type="text"
                                        id='particularsNatureOfWork'
                                        autoComplete="off"
                                        required
                                        value={data.form3.particularsNatureOfWork}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="particularsClassOfWork">Class of the work</label>
                                    <input
                                        placeholder='Enter details'
                                        type="text"
                                        id='particularsClassOfWork'
                                        autoComplete="off"
                                        required
                                        value={data.form3.particularsClassOfWork}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='particularsDescription'>Description of the work</label>
                                    <input
                                        placeholder='Enter details'
                                        type="text"
                                        id='particularsDescription'
                                        autoComplete="off"
                                        required
                                        value={data.form3.particularsDescription}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='particularsTitle'>Title of the work</label>
                                    <input
                                        placeholder='Enter title of work'
                                        type="text"
                                        id='particularsTitle'
                                        autoComplete="off"
                                        required
                                        value={data.form3.particularsTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='particularsLanguageOfWork'>Language of the work</label>
                                    <input
                                        placeholder='Enter language of work'
                                        type="language"
                                        id='particularsLanguageOfWork'
                                        autoComplete="off"
                                        required
                                        value={data.form3.particularsLanguageOfWork}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='app__question'>
                                    <label htmlFor='text'>Is the author alive?</label>
                                    <input
                                        id='isAuthorAlive'
                                        checked={data.form3.isAuthorAlive === "yes"}
                                        value="yes"
                                        type="radio"
                                        onChange={handleChange}
                                    /> Yes
                                    <input
                                        id='isAuthorAlive'
                                        checked={data.form3.isAuthorAlive === "no"}
                                        value="no"
                                        type="radio"
                                        onChange={handleChange}
                                    />{" "}
                                    No

                                </div>
                                <div>
                                    {data.form3.isAuthorAlive === "no" ? (
                                        <div className='no__container'>
                                            <div>
                                                <label htmlFor='particularsDateOfDecease'>Date of his Decease</label>
                                                <input
                                                    style={{ paddingRight: '10px' }}
                                                    placeholder='Enter Date (DD/MM/YYYY)'
                                                    type="date"
                                                    id='particularsDateOfDecease'
                                                    autoComplete="off"
                                                    required
                                                    value={data.form3.particularsDateOfDecease}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='particularsNameOfAuthor'>Name of the author</label>
                                                <input
                                                    placeholder='Enter Name'
                                                    type="text"
                                                    id='particularsNameOfAuthor'
                                                    autoComplete="off"
                                                    required
                                                    value={data.form3.particularsNameOfAuthor}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='particularsAddressOfAuthor'>Address of the author</label>
                                                <input
                                                    placeholder='Enter address'
                                                    type="text"
                                                    id='particularsAddressOfAuthor'
                                                    autoComplete="off"
                                                    required
                                                    value={data.form3.particularsAddressOfAuthor}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='particularsNationalityOfAuthor'>Nationality of the author</label>
                                                <input
                                                    placeholder='Enter details'
                                                    type="text"
                                                    id='particularsNationalityOfAuthor'
                                                    autoComplete="off"
                                                    required
                                                    value={data.form3.particularsNationalityOfAuthor}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className='yes__container'>

                                                <div>
                                                    <label htmlFor='particularsNameOfAuthor'>Name of the author</label>
                                                    <input
                                                        placeholder='Enter Name'
                                                        type="text"
                                                        id='particularsNameOfAuthor'
                                                        autoComplete="off"
                                                        required
                                                        value={data.form3.particularsNameOfAuthor}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor='particularsAddressOfAuthor'>Address of the author</label>
                                                    <input
                                                        placeholder='Enter address'
                                                        type="text"
                                                        id='particularsAddressOfAuthor'
                                                        autoComplete="off"
                                                        required
                                                        value={data.form3.particularsAddressOfAuthor}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor='particularsNationalityOfAuthor'>Nationality of the author</label>
                                                    <input
                                                        placeholder='Enter details'
                                                        type="text"
                                                        id='particularsNationalityOfAuthor'
                                                        autoComplete="off"
                                                        required
                                                        value={data.form3.particularsNationalityOfAuthor}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='action-btn3'>
                                <button className='btn text-center' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleBack}>
                                    <ArrowLeftIcon style={{ fontSize: '40' }} />
                                    Back
                                </button>
                                <button className='btn text-center' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleNext}>
                                    Next
                                    <ArrowRightIcon style={{ fontSize: '40' }} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default LiteraryWork3;

