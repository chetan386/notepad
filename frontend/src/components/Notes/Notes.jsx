/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import CardList from '../CardList/CardList';
import "./Notes.css"
import NoteContext from '../NoteContext/NoteContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';





function Notes() {
  
   const [notes,setNotes] = useState()
   const navigate = useNavigate()
 
  
  const fetchData = async() =>{
     const {data} = await axios.get("/api/v1/list")
     setNotes(data);
  }



  

  // TO UPDATE THE PAGE AFTER DELETING ITEMS
  const handleDelete = async(id) => {
      const {data} = await axios.delete(`/api/v1/list/${id}`)
      const newList = data.list
      console.log(newList)
      setNotes((prevNotes) => {
        return { ...prevNotes, list: newList };
      });
   navigate(0)
  };

  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    
    <NoteContext.Provider value={{ handleDelete }}>
      <Navbar />
    <div className="notes">   
      {
       notes && notes.list.map((note,i)=>{
            return <CardList key={i}  id={note._id} heading = {note.heading} content = {note.content} />;
        })
      
      }
    </div>
    </NoteContext.Provider>
  )

}

export  default Notes
