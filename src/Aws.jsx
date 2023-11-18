import React, { useState } from 'react';
import axios from 'axios';

const S3Uploader = () => {
  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    try {
      // Step 1: Get the pre-signed URL from the server
      const urlResponse = await axios.get('https://kopyrightit-backend-zdfw.onrender.comgetUploadUrl'); // Update with your server's endpoint
      const { url } = urlResponse.data;

      setUploadUrl(url);

      // Step 2: Upload the selected file to the pre-signed URL
      const uploadResponse = await axios.put(url, file, {
        headers: {
          'Content-Type': file.type,
        },
      });

      // Handle the upload response as needed
      console.log('File uploaded successfully:', uploadResponse);

      setUploaded(true);
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Submit</button>
      {uploaded && (
        <div>
          <p>File uploaded successfully to the following URL:</p>
          <p>{uploadUrl}</p>
        </div>
      )}
    </div>
  );
};

export default S3Uploader;
