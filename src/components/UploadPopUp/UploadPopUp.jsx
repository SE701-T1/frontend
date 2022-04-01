import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import styles from './UploadPopUp.module.css';

export default function UploadPopUp({ open, close }) {
  const [file, setFile] = useState([]);
  const [flag, setFlag] = useState();

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
  }

  const handleOnChange = (e) => {
    setFile([...file, ...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(file.length < 1) {
      setFlag('true');
    } else if(file.length > 1) {
      setFlag('true');
    } else {
      setFlag('false');
      close();
    }
    /** need to add submit fucntion code here */
  };

  return (
    <Dialog open={open} fullWidth>
      <div className={styles.title}>
        <h1> Upload Timetable</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.uploadContent}>
          <Button
            component="label"
            variant="contained"
            sx={{ maxHeight: '40px', minWidth: '120px', minHeight: '40px' }}>
            <UploadIcon />
            Upload File
            <input type="file" onChange={handleOnChange} hidden />
          </Button>
        </div>

        <div className={styles['form-group-preview']}>
          {file != null &&
            file.length > 0 &&
            file.map((item, index) => (
              <div key={item}>
                {item.name}
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
                  onClick={() => deleteFile(index)}>
                  Delete
                </Button>
              </div>
            ))}
        </div>
      </form>
      
      <div className={styles['upload-errors']}>
        {file.length < 1 &&
          flag==='true' &&
          'Please upload a file'
        }
        {file.length > 1 &&
          flag==='true' &&
          handleSubmit &&
          'Only 1 file allowed'}
      </div>
      
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
