import React from 'react'
import './Card.css'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SpeedDial from '@mui/material/SpeedDial';
import { useNavigate } from 'react-router-dom';




const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '33.854166666666664vw',
    height: '42.465753424657535vh',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

function Card() {
  
const navigate =  useNavigate()

const addList = () =>{
  navigate('/new')
}
  return (
    <div className='Card'>
   <Stack direction="row" spacing={2}>
      <DemoPaper className='paper' elevation={5} square={false}><SpeedDial 
        onClick={addList}
        className='plus'
        ariaLabel="SpeedDial basic example"
        icon={ <AddIcon sx={{width:'1.953125vw',height:'4.109589041095891vh'}}/>}
      >
      </SpeedDial></DemoPaper>
    </Stack>
      
    </div>
  )
}

export default Card
