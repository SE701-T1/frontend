import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import axios from 'axios';
// import { uploadFileIcs } from '../../api/TimetableAPI';
import styles from './UploadPopUp.module.css';

export default function UploadPopUp({ open, close }) {
  const [file, setFile] = useState(undefined);
  const [error, setError] = useState('');
  function deleteFile() {
    setFile(undefined);
  }

  const handleOnChange = (e) => {
    if(e.target.files[0]){
      if(e.target.files[0].type !== 'text/calendar') {
        setFile(undefined);
        setError('Please upload a .ics file');
      } else {
        setFile(e.target.files[0]);
        setError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* For issue #48: connect to backend */
    console.log(e)
    // await uploadFileIcs(file)

    const formData = new FormData();
    formData.append("file",file,file.name);
    
    // const config = {
    // headers: { "Content-Type": "multipart/form-data" }
    // };
    const baseUrl = process.env.REACT_APP_BACKEND_ENDPOINT;
    axios({url: `${baseUrl}/api/timetable/users/upload/file`, method: 'post', data: formData, headers: { "Content-Type": "multipart/form-data" }}).then( (response) => {
      console.log(response);
    })
    .catch( (err) => {
      console.log(err);
    });


    console.log(file)
    close();
  };

  return (
    <Dialog open={open} fullWidth>
      <div className={styles.title}>
        <h1> Upload Timetable</h1>
      </div>

      <form onSubmit={handleSubmit} >
        <div className={styles.uploadContent}>
          <Button
            component="label"
            variant="contained"
            sx={{ maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}>
            <UploadIcon />
            Upload File
            <input type="file" onChange={handleOnChange} hidden multiple="multiple" accept=".ics" id="fileUpload"/>
          </Button>
        </div>

        <div className={styles['form-group-preview']}>
          {
           file !== undefined &&
           <><div>{file.name}</div> 
           <Button
            variant="outlined"
            sx={{
              maxWidth: '120px',
              maxHeight: '40px',
              minWidth: '120px',
              minHeight: '40px',
              marginLeft: '10px'
            }}
            type="button"
            onClick={() => deleteFile()}>
            Delete
            </Button></>
          }
        </div>
      </form>
      <div className={styles["upload-Error"]}>{error}</div>
      <div className={styles['close-button']}>
        <Button
          variant="outlined"
          sx={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px', marginRight: '5px'}}
          onClick={close}>
          Close
        </Button>
        <Button
          variant="contained"
          sx={{ maxWidth: '120px', maxHeight: '40px', minWidth: '120px', minHeight: '40px', marginLeft: '5px' }}
          onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </Dialog>
  );
}
