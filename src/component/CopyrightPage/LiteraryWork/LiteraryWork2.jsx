/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import './LiteraryWork2.css';

const LiteraryWork2 = (props) => {
    const { data, tab, setData, setTab } = props;

    const handleChange = (e) => {
        setData({
            ...data,
            form2: {
                ...data.form2,
                [e.target.id]: e.target.value
            }
        });
    }

    const handleBack = (e) => {
        setTab(tab - 1);
        e.preventDefault();
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
                <div className='form-container2' style={{ marginTop: '50px' }}>
                    <h2 className='text-center'><u>Few More Questions About Your Work</u></h2>
                    <div className='formq-field'>
                        <form>
                            <div className='radio-btn'>
                                <label htmlFor='text'>Is the work to be registered an original work?</label>
                                <div>
                                    <p style={{ fontWeight: '500', fontSize: '18px' }}>
                                        <input
                                            id='isOriginalWork'
                                            checked={data.form2.isOriginalWork === "yes"}
                                            value="yes"
                                            type="radio"
                                            onChange={handleChange}
                                        />Yes
                                    </p>
                                    <p style={{ fontWeight: '500', fontSize: '18px' }}>
                                        <input
                                            id='isOriginalWork'
                                            checked={data.form2.isOriginalWork === "no"}
                                            value="no"
                                            type="radio"
                                            onChange={handleChange}
                                        />No
                                    </p>
                                </div>
                            </div>
                            <div>
                                {data.form2.isOriginalWork === "no" ? (
                                    <div className='conditional-conatiner text-center'>
                                        <div>
                                            <label htmlFor='workTranslation'>Translation of the work in public domain:</label>
                                            <input
                                                placeholder='Enter details'
                                                type="text"
                                                id='workTranslation'
                                                autoComplete="off"
                                                required
                                                value={data.form2.workTranslation}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='workTranslationCopyright'>Translation of the work in which copyright subsists:</label>
                                            <input
                                                placeholder='Enter details'
                                                type="text"
                                                id='workTranslationCopyright'
                                                autoComplete="off"
                                                required
                                                value={data.form2.workTranslationCopyright}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='workAdaption'>An adaption of work in the public domain:</label>
                                            <input
                                                placeholder='Enter details'
                                                type="text"
                                                id='workAdaption'
                                                autoComplete="off"
                                                required
                                                value={data.form2.workAdaption}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='workAdaptionCopyright'>An adaption of the work in which copyright subsists:</label>
                                            <input
                                                placeholder='Enter details'
                                                type="text"
                                                id='workAdaptionCopyright'
                                                autoComplete="off"
                                                required
                                                value={data.form2.workAdaptionCopyright}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className='text-center' style={{ paddingTop: '30px' }}>
                                    </div>
                                )}
                            </div>
                            <div className='action-btn'>
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

export default LiteraryWork2;
