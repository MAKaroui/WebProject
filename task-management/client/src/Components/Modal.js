import React from "react";
import axios from "axios";
import "./Modal.css";

function Modal({closeModal,taskID,cards,setcards}){
    const remove=()=>{
        setcards(cards.filter((card) => card.id !== taskID))
        axios.delete(`http://localhost:8000/api/tasks/${taskID}`)
        .then(res => console.log(res))
        .catch(error =>console.log(error.message))
        closeModal(false)
        
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Are you sur you want to remove this task ?</h1>
                </div>
                <div className="footer">
                    <button onClick={()=>closeModal(false)}>Cancel</button>
                    <button onClick={remove}>Confirm</button>
                </div>
            </div>
        </div>
)
}

export default Modal