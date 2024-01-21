import { styled } from '@mui/material/styles';
import { Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import "./CardList.css"
import SpeedDialCustom from '../Custom/SpeedDialCustom';




const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '33.854166666666664vw',
    height: '42.465753424657535vh',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));



function CardList({id,heading ,content}) {
  
  const [head,setHead] = useState(heading)
  const [con,setCon] = useState(content)
  
  
  return (
    <div className='container'>
       <SpeedDialCustom  heading={head} content= {con} id ={id}  />
    <Stack direction="row" spacing={2}>
      <DemoPaper elevation={5} square={false}>
      <TextField fullWidth defaultValue={heading} onChange={(e)=>{setHead(e.target.value)}} id="fullWidth" variant='standard' />
        <TextField
         fullWidth
         defaultValue={content} 
         id="fullWidth"
          multiline
          rows={10}
          onChange={(e)=>{setCon(e.target.value)}}
          InputProps={{
            disableUnderline: true,
          }}
          variant="standard"
        /></DemoPaper>
    </Stack>
   
    </div>
  )
}

export default CardList
