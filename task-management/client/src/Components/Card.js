import { useEffect,useState } from "react";
import React  from "react";
import axios from "axios";

function Card(props){
const [status,setStatus]= useState(props.info.isCompleted);
const [deadline,setDeadline]=useState(props.info.deadline);
const [title,setTitle]=useState(props.info.title);
const [id,setId]=useState(props.info.id);



const remove=()=>{
    axios.delete(`http://localhost:8000/api/tasks/${id}`)
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
             <h3> Title= {title}</h3> 
             <h3> Deadline= {deadline.toString().slice(0, 10)}</h3>
             <h3> Status= {status.toString()}</h3> 
             <button onClick={Done}>Done</button>
             <button>Edit</button>
             <button onClick={remove}>Delete</button>            
        </div>
    )
}
export default Card