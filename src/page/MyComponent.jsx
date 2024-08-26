import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

const MyComponent = () => {
  const [files, setFiles] = useState({
    original: null,
    overlay: null,
    mask: null,
  });
  const [images, setImages] = useState({
    original: [],
    overlay: [],
    mask: [],
  });

  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (type) => (event) => {
    setFiles({
      ...files,
      [type]: event.target.files,
    });
  };

  const handleFetchImages = async (type) => {
    let url;
    switch (type) {
      case 'original':
        url = 'http://192.168.1.41:8000/api/upload/get_original_images/';
        break;
      case 'overlay':
        url = 'http://192.168.1.41:8000/api/upload/get_overlay_images/';
        break;
      case 'mask':
        url = 'http://192.168.1.41:8000/api/upload/get_mask_images/';
        break;
      default:
        return;
    }

    try {
      const response = await axios.get(url);
      const fetchedImages = response.data.map(image => ({
        ...image,
        url: `data:image/jpeg;base64,${image.content}`,
      }));
      setImages({
        ...images,
        [type]: fetchedImages,
      });
      console.log(`${type} Response:`, fetchedImages);
    } catch (error) {
      console.error(`Error fetching ${type} data:`, error);
    }
  };
  <Draggable
  handle="#draggable-dialog-title"
  cancel={'[class*="MuiDialogContent-root"]'}
>
  <Paper {...props} />
</Draggable>

  const handleUploadImages = async (type) => {
    const fileList = files[type];
    if (!fileList || fileList.length === 0) {
      alert(`Please choose files to upload for ${type}.`);
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append('files', fileList[i]);
    }

    try {
      const response = await axios.post(`http://192.168.1.41:8000/api/upload/upload_${type}_images/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(`Uploaded ${type} images:`, response.data);
      setShowModal(false); // Close the modal after uploading
    } catch (error) {
      console.error(`Error uploading ${type} images:`, error);
    }
  };

  return (
    <Container className="text-center mt-4">
      <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Button variant="primary" onClick={() => handleFetchImages('original')}>Fetch Original Images</Button>
          <Button variant="secondary" onClick={() => handleFetchImages('overlay')} className="mx-2">Fetch Overlay Images</Button>
          <Button variant="success" onClick={() => handleFetchImages('mask')}>Fetch Mask Images</Button>
        </Box>
        <Box>
          <Button variant="primary" onClick={() => setShowModal(true)}>Upload Original Images</Button>
          <Button variant="secondary" onClick={() => handleUploadImages('overlay')} className="mx-2">Upload Overlay Images</Button>
          <Button variant="success" onClick={() => handleUploadImages('mask')}>Upload Mask Images</Button>
        </Box>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      {/* Modal for Uploading Original Images */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Original Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formOriginalFile">
              <Form.Label>Choose Original Images:</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange('original')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUploadImages('original')}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="mt-4">
        {Object.keys(images).map((type) => (
          <div key={type}>
            <h3>{`${type.charAt(0).toUpperCase() + type.slice(1)} Images`}</h3>
            {images[type].map((image, index) => (
              <div key={index} className="mb-3">
                <h5>{image.filename}</h5>
                <img
                  src={image.url}
                  alt={image.filename}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyComponent;
