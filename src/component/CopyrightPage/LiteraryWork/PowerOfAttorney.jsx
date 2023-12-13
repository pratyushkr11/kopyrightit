import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PowerOfAttorneyImage from '../../../assets/POA.png'

import './PowerOfAttorney.css'

const PowerOfAttorney = (props) => {
    const { data, tab, setData, setTab } = props;

    const handleSave = (e) => {
        e.preventDefault();
    }

    const handleBack = (e) => {
        e.preventDefault();
        setTab(tab - 1);
    };

    return (
        <>
            <div className='main__container'>
                <Navbar />
                <div className='poa-form-container' style={{ marginTop: '50px' }}>
                    <h2 className='text-center'><u>Power Of Attorney</u></h2>
                    <div className='formq-field'>
                        <form>
                            <div className='poa-image'>
                                <img src={PowerOfAttorneyImage} alt='Power_of_attorney' />
                            </div>
                            <div className='form-checkbox'>
                                <FormControlLabel control={<Checkbox />} label="I agree to give Ipgyaan Power Of Attroney to file copyright on my behalf"
                                    sx={{ fontSize: '18px' }}
                                />
                            </div>
                            <div className='poa-action-btn'>
                                <button className='btn btn-back' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleBack}>
                                    <ArrowLeftIcon style={{ fontSize: '40' }} />
                                    Back
                                </button>
                                <button className='btn btn-lg poa-cta-btn' onClick={handleSave}>Confirm and Save Details</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PowerOfAttorney