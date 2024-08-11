
import React,{useContext,useEffect,useRef,useState} from 'react'
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import noteContext from '../context/notecontext';
import { useNavigate } from 'react-router-dom';


const Note = () => {
  const context= useContext(noteContext);
  let navigate = useNavigate();

  // eslint-disable-next-line
  const ref= useRef(null);
  const[note,setnotes]= useState({etitle:"",edescription:"",tag:"default"})

  const updateNote=(currentNote)=>{
     ref.current.click()
     setnotes({ id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description})
  }
  const{notes,getNotes,editNote}= context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
      navigate("/login");
    }
    
    // eslint-disable-next-line
}, [])

const handleclick=(e)=>{
  console.log("Updating the note...");
 
   editNote(note.id,note.etitle,note.edescription)
   e.preventDefault();
  setnotes({etitle:"",edescription:"",tag:"default"});

}
const onChange=(e)=>{
  setnotes({...note,[e.target.name]: e.target.value})
}
  const [showModal, setShowModal] = React.useState(false);
 
 
  
  return (
    <>
    <AddNote/>
    <button hidden ref={ref}
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit Note
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="max-w-sm mx-auto mt-10">
  <div className="mb-5">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" id="etitle" name="etitle" value={note.etitle} minLength={3}  onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input type="text" id="edescription" name="edescription" minLength={5}   value={note.edescription} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
 
</form>
                {/*footer*/}   <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button disabled={note.etitle.length<5 || note.edescription.length<5}
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  onClick={handleclick}                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    





    <div className="container text-2xl">
      <h1 className='text-center font-bold mt-10 gap-8'>Your Notes</h1>
      <div className="container text-center my-10 font-bold text-lg ">
      {notes.length===0 && 'No Notes to display'}
      </div>
      {notes.map((note)=>{
     return <Noteitem key={note._id} updateNote={updateNote} note= {note}/>;
})}

     
    </div>
      
    </>
  ) }


export default Note
