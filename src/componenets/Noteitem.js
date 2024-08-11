import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import noteContext from '../context/notecontext';

const Noteitem = (props) => {
  const context= useContext(noteContext);
  // eslint-disable-next-line
  const{deleteNote}= context;
    const {note,updateNote}= props;
    
             
    
  return (
    <div className=" w-max text-center inline-flex mx-6 mt-1 mr-6 mb-5 justify-evenly">

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="# " className='flex gap-4'>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
        <FontAwesomeIcon  icon={faTrash} onClick={()=>{deleteNote(note._id)}}/>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{updateNote(note)}}  />

    </a>
    
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{note.description}
      
    </p>
    
</div>

    </div>
    
  )
}

export default Noteitem
