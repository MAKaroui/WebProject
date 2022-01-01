import { useEffect,useState } from "react";
import React  from "react";
import axios from "axios";
import Modal from "./Modal";

function Card(props){
const [active,setActive]= useState(false);
const [status,setStatus]= useState(props.info.isCompleted);
const [deadline,setDeadline]=useState(props.info.deadline);
const [title,setTitle]=useState(props.info.title);
const [newTitle,setNewTitle]=useState(title);
const [id,setId]=useState(props.info.id);
const [openModal,setOpenModal]=useState(false);

const cancel=()=>{
    setActive(false);
}
const confirm=()=>{
    setTitle(newTitle)
    setActive(false);
    axios.put(`http://localhost:8000/api/tasks/${id}`,{title})
    .then(res => console.log(res))
    .catch(error =>console.log(error.message))
}

const Done=()=>{
    setStatus(true)
    axios.put(`http://localhost:8000/api/tasks/${id}/complete`)
    .then(res => console.log(res))
    .catch(error =>console.log(error.message))
}
    return(
        <div className='bg-light-green dib br3 pa3 ma'> 
             <h3>ID={id}</h3>  
             {active===false && <h3> Title= {title}</h3> }
             {active===true && 
             <label>Enter the task title:
                    <input required type="text" placeholder="Title" value={newTitle} onChange={event1=>setNewTitle(event1.target.value)}/>
                    <span class="validity"></span>
             </label>}
             <h3> Deadline= {deadline.toString().slice(0, 10)}</h3>
             <h3> Status= {status.toString()}</h3> 
             {active===true &&
             <> 
                <button onClick={cancel}>Cancel </button>
                <button onClick={confirm}>Confirm</button>
             </>}
             {active===false &&
             <>
                <button onClick={Done}>Done</button>
                <button onClick={()=>setActive(true)}>Edit</button>
                <button onClick={()=>setOpenModal(true)}>Delete</button>
                {openModal &&<Modal closeModal={setOpenModal} taskID={id} cards ={props.cards} setcards={props.setcards}/>}
            </>}
        </div>
    )
}
export default Card