/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";
import { useNoteContext } from '../NoteContext/NoteContext';
import "./SpeedDailCustom.css"
import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';


function SpeedDialCustom({heading,content,id}) {
 const [back,setBack] = useState(false)
  const [open, setOpen] = React.useState(false);

  const backOpen = ()=>{
    setBack(true)
  }
  const backClose = ()=>{
    setBack(false)
  }

  const handleOn = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    
   
    const { handleDelete } = useNoteContext(); 
      
   
    const handleCLick=async()=>{
      
      try{
        backOpen()
        setTimeout(async()=>{
          await handleDelete(id) 
        },[2000])
         
      }
      catch(e){
        console.log(e)
      }
      
      }

   const handleUpdate = async() =>{
     
        await axios.patch(`/api/v1/list/${id}`,{
          heading: heading,
          content:content
        })
        handleOn()
       
   }
    

  return (
    <div className='con'>
        <DeleteIcon onClick = {handleCLick} sx={{fontSize:30, "&:hover": { fontSize: 32, color: '#7cbdfe' }}} className='icon'  />
        <SaveIcon onClick={handleUpdate}  sx={{fontSize:30,"&:hover": { fontSize: 32, color: '#7cbdfe' }}} className='icon'  />
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Updated successfully!
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={back}
        onClick={backClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      
    </div>
  )
}

export default SpeedDialCustom
