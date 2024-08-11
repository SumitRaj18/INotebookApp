import { json } from 'react-router-dom';
import noteContext from './notecontext';
import { useState } from 'react';
const NoteState = (props) => {
  const notesinitial = [ ];
  const host= "https://inotebook-p195.onrender.com/";

  const [notes, setnotes] = useState(notesinitial)
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setnotes(json)
  }
 
    
  const addNote = async (title, description) => {
    const response = await fetch(`${host}api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description })
    });

    
const note= await response.json();
   
    setnotes(notes.concat(note))
    console.log("Added a note");
    
  }
  const deleteNote = async (id) => {
    const response= await fetch(`${host}api/notes/deletenotes/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
   } 
  });
  const json= response.json();
    console.log("deleted note of id" + id)
    const newnote = notes.filter((note) => { return note._id !== id })
    setnotes(newnote);
  }
  const editNote = async (id,title,description,tag) => {
    const response = await fetch(`${host}api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    })
     getNotes()
    ;
    const json = response.json();
   console.log(json);
  
   let newNote= JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id===id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
      
    }
     setnotes(newNote)
  
  }
  return (
    <noteContext.Provider value={{ notes, setnotes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </noteContext.Provider>
  )
}
export default NoteState;