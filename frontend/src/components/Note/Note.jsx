import React, { useState } from 'react'
import {  Backdrop, Button, CircularProgress, IconButton, Paper, Snackbar, Stack,  TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import './Note.css'
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import axios from "axios"
import CloseIcon from '@mui/icons-material/Close';



const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '33.854166666666664vw',
    height: '42.465753424657535vh',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

function Note() {
  const [notify,setNotify] = useState(false)
  const [open, setOpen] = React.useState(false);


 
  const handleNotifyopen = () => {
    setNotify(true);
  };

  const handleNotifyclose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotify(false);
  };


  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleNotifyclose}>
        CLOSE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleNotifyclose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );



  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  
    const [loading, setLoading] = React.useState(false);
    const [content,setContent] = useState('')
    const [head,setHead] = useState('')
    const navigate = useNavigate();
    const  handleClick = async() =>{
      try{
        if(content.length=== 0 && head.length===0){                                    
          handleNotifyopen() 
          return;
    
        }
       
       handleOpen()
    
      await axios.post('/api/v1/create',{
        heading: head,
        content: content
      })
      
    }
    catch(err){
      console.log(err.response.data)
    }
     
      setLoading(!loading);
      navigate('/notes')
  
    }
  return (
    <div>
        <Navbar />
        <div className='Note'>
        <div>
     <Stack direction="row" spacing={2}>
      <DemoPaper elevation={5} square={false}>
      <TextField fullWidth label="Heading" onChange={(ev)=>{setHead(ev.target.value)}} id="fullWidth" variant='standard' />
        <TextField
         fullWidth label="Content" 
         id="fullWidth"
          multiline
          rows={10}
          onChange={(ev)=>{setContent(ev.target.value)}}
          InputProps={{
            disableUnderline: true,
          }}
          variant="standard"
        /></DemoPaper>
    </Stack>
    </div>
      <div  className='btn'>
    <LoadingButton
          sx={{padding: 2}}
          onClick={handleClick}
          endIcon={<SendIcon />}
          loadingPosition="end"
          loading={loading}
          variant="contained"
        >
          <span>Create a Note</span>
        </LoadingButton>
        </div>
        </div>
        <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>

<Snackbar
        open={notify}
        autoHideDuration={3000}
        onClose={handleNotifyclose}
        message="Please enter some text"
        action={action}
      />

    </div>
  )
}

export default Note