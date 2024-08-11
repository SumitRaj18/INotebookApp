import AddNote from './AddNote'
import Note from './Note'

const Home = (props) => {
 const {showAlert}=props;
  return (
    <div>
     <Note showAlert={showAlert}/>
    </div>
  )
}

export default Home
