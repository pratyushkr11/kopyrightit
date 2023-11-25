import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FormPreviewModal from './FormPreviewModal';
import axios from 'axios';

import './LiteraryWorkUpload.css';

const LiteraryWorkUpload = (props) => {


    const { data, tab, setData, setTab } = props;
    const [isOpen, setIsOpen] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(null);

    const [fileKey, setFileKey] = useState();
    const [imageKey, setImageKey] = useState();
    const [docSuccessMessage, setDocSuccessMessage] = useState('');
    const [docErrorMessage, setDocErrorMessage] = useState('');
    const [imageSuccessMessage, setImageSuccessMessage] = useState('');
    const [imageErrorMessage, setImageErrorMessage] = useState('');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        try {
            const urlResponse = await axios.get("http://localhost:3001/getUploadUrl");
            const { url, key } = urlResponse.data;

            if (selectedFile) {
                const uploadResponse = await axios.put(url, selectedFile, {
                    headers: {
                        "Content-Type": selectedFile.type,
                    },
                });

                setFileKey(key); // Store the key
                setDocSuccessMessage('File uploaded successfully');
                setDocErrorMessage('');
            } else {
                setDocErrorMessage('No file selected for upload.');
                setDocSuccessMessage('');
            }
        } catch (error) {
            console.error("Error uploading the file:", error);
            setDocErrorMessage('Error uploading the file');
            setDocSuccessMessage('');
        }
    };

    const handleImageUpload = async () => {
        try {
            const urlResponse = await axios.get("http://localhost:3001/getUploadUrl");
            const { url, key } = urlResponse.data;

            if (image) {
                const uploadResponse = await axios.put(url, image, {
                    headers: {
                        "Content-Type": image.type,
                    },
                });

                setImageKey(key); // Store the key
                setImageSuccessMessage('Image uploaded successfully');
                setImageErrorMessage('');
            } else {
                setImageErrorMessage('No image selected for upload.');
                setImageSuccessMessage('');
            }
        } catch (error) {
            console.error("Error uploading the image:", error);
            setImageErrorMessage('Error uploading the image');
            setImageSuccessMessage('');
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsOpen(true);

        setData({
            ...data,
            keyValue: {
                ...data.keyValue,
                fileKey1: fileKey,
                imageKey1: imageKey
            }
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = (e) => {
        e.preventDefault();
        setTab(tab - 1);
    };

    return (
        <>
            <FormPreviewModal isOpen={isOpen} setIsOpen={setIsOpen} contentLabel={'Preview'} data={data} />
            <div className='main__container'>
                <Navbar />
                <div className='upload__container' style={{ marginTop: '50px' }}>
                    <h2><u>Upload Supporting Files</u></h2>
                    <div className='upload'>
                        <div className='doc-upload'>
                            <div className="mb-3 text-center">
                                <label htmlFor="formFileLg" className="form-label">Upload Your Work</label>
                                <p>Drag & drop files or Browse</p>
                                <input type="file" className="upload-file form-control" id="inputGroupFile02" onChange={handleFileChange} />
                                <p style={{ paddingTop: '5px' }}>Supported formats: All</p>
                                {docSuccessMessage && <p>{docSuccessMessage}</p>}
                                {docErrorMessage && <p>{docErrorMessage}</p>}
                                <button className='btn btn-doc btn-primary' onClick={handleFileUpload} style={{ zIndex: '0' }}>Upload File</button>
                            </div>
                        </div>

                        <div className='sign-upload'>
                            <div className="mb-3 text-center">
                                <label htmlFor="formFileLg" className="form-label">Upload Your Signature</label>
                                <p>Drag & drop files or Browse</p>
                                <input type="file" className="form-control" id="inputGroupFile02" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
                                <p style={{ paddingTop: '5px' }}>Supported formats: JPEG, PNG</p>
                                {imageSuccessMessage && <p>{imageSuccessMessage}</p>}
                                {imageErrorMessage && <p>{imageErrorMessage}</p>}
                                <button className='btn btn-sign btn-primary' style={{ zIndex: '0' }} onClick={handleImageUpload}>Upload Signature</button>
                            </div>
                        </div>
                    </div>
                    <div className='action-btn-upload' style={{ padding: '0' }}>
                        <button className='btn btn-back' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleBack}><ArrowLeftIcon style={{ fontSize: '40' }} />Back</button>
                        <button className='btn btn-lg cta-btn' onClick={handleSave}>Confirm and Save Details</button>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default LiteraryWorkUpload;