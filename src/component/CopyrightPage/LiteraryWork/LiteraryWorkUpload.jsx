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

    // const validateFile = (view) => {
    //     // For simplicity, assume the file is valid if it's not empty
    //     return view.length > 0;
    // };
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = function (event) {
    //             const buffer = event.target.result;
    //             const view = new Uint8Array(buffer);
    
    //             if (!validateFile(view)) {
    //                 // Handle corrupted or invalid file
    //                 alert('The file appears to be corrupted or invalid.');
    //                 return;
    //             }
    
    //             setSelectedFile(file);
    //         };
    //         // setSelectedFile(file);
    
    //         reader.readAsArrayBuffer(file);
    //     }
    // };
    
    
    

    

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        try {
            const urlResponse = await axios.get("http://localhost:3001/getUploadUrl");
            const { url, key } = urlResponse.data;
    
            if (selectedFile) {
                const fileSize = selectedFile.size; // Get file size in bytes
    
                // Set maximum file size based on file type
                let maxSize;
                console.log(selectedFile.type)
                switch (selectedFile.type) {
                    case 'application/pdf':
                    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                        // Set max size for PDF and DOCX files to standard size or adjust as needed
                        maxSize = 50 * 1024 * 1024; // 50 MB
                        break;
                    case 'image/jpeg':
                    case 'image/png':
                        // Set max size for image files to 4MB
                        maxSize = 4 * 1024 * 1024; // 4 MB
                        break;
                    case 'audio/mp3':
                        // Set max size for audio files to 1GB or adjust as needed
                        maxSize = 1024 * 1024 * 1024; // 1 GB
                        break;
                    case 'video/mp4':
                        maxSize = 4 * 1024 * 1024 * 1024; // 4 GB
                        break;
                    case 'video/x-matroska':
                        maxSize = 4 * 1024 * 1024 * 1024; // 4 GB
                        break;
                    case 'video/webm':
                        maxSize = 4 * 1024 * 1024 * 1024; // 4 GB
                        break;
                    case 'video/wmv':
                        // Set max size for video files to 4GB or adjust as needed
                        maxSize = 4 * 1024 * 1024 * 1024; // 4 GB
                        break;
                    default:
                        maxSize = 0; // Set default size limit for other file types
                }
    
                const allowedExtensions = ['pdf', 'docx', 'jpg', 'jpeg', 'png', 'mp3', 'mp4', 'avi', 'wav', 'ogg', 'flac', 'wmv', 'mov', 'webm', 'mkv'];
                const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    
                if (!allowedExtensions.includes(fileExtension)) {
                    // Handle unsupported file extension
                    setDocErrorMessage('Unsupported file format. Please select a valid file.');
                    setDocSuccessMessage('');
                    return;
                }
    
                if (fileSize > maxSize) {
                    // Handle file size exceeding limit
                    setDocErrorMessage(`File size should be less than ${maxSize / (1024 * 1024)} MB.`);
                    setDocSuccessMessage('');
                    return;
                }
    
                const uploadResponse = await axios.put(url, selectedFile, {
                    headers: {
                        "Content-Type": selectedFile.type,
                    },
                });
    
                setFileKey(key); // Store the key
                setDocSuccessMessage('File uploaded successfully');
                setDocErrorMessage('');
            } else {
                // Handle no file selected
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
                const fileSize = image.size; // Get file size in bytes
                const fileSizeInKB = fileSize / 1024; // Convert to KB

                if (fileSizeInKB > 100) {
                    setImageErrorMessage('Image size should be less than 100KB.');
                    setImageSuccessMessage('');
                    return;
                }
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

    // const handleSave = async (e) => {
    //     e.preventDefault();
    //     setIsOpen(true);

    //     setData({
    //         ...data,
    //         keyValue: {
    //             ...data.keyValue,
    //             fileKey1: fileKey,
    //             imageKey1: imageKey
    //         }
    //     });
    // };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = (e) => {
        e.preventDefault();
        setTab(tab - 1);
    };

    const handleNext = (e) => {
        e.preventDefault();
        setTab(tab + 1);
    };

    return (
        <>
            <FormPreviewModal isOpen={isOpen} setIsOpen={setIsOpen} contentLabel={'Preview'} data={data} />
            <div className='main__container'>
                <Navbar />
                <div className='upload__container'>
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
                    <div className='action-btn-upload'>
                        <button className='btn btn-back' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleBack}><ArrowLeftIcon style={{ fontSize: '40' }} />Back</button>
                        <button className='btn btn-front' style={{ color: 'blue', fontSize: '25px', fontWeight: '400' }} onClick={handleNext}>Next<ArrowRightIcon style={{ fontSize: '40' }} /></button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default LiteraryWorkUpload;