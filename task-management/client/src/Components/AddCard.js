import {useState} from 'react';
import React, {useRef} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';

 function AddCard(){

    const [selectedDate, setSelectedDate]=useState(null)
    const [id,setId]=useState('')
    const [title,setTitle]=useState('')
    const status= false;
    const submit = ()=>{
        axios.post('http://localhost:8000/api/tasks', {
          id,    
          title,
          selectedDate,
          status
      }).then(res => console.log(res))
      .catch(error =>console.log(error.message))
     }

    
    return(
        <>  
            <form>
                <label>Enter the task ID:
                    <input required type="text" placeholder="Task ID" value={id} onChange={event=>setId(event.target.value)}/>
                    <span class="validity"></span>
                </label>
                <br/>
                <label>Enter the task title:
                    <input required type="text" placeholder="Title" value={title} onChange={event1=>setTitle(event1.target.value)}/>
                    <span class="validity"></span>
                </label>
                <br/>
                <label>Enter the task deadline date:
                    <DatePicker selected={selectedDate} placeholderText='Date' value={selectedDate}
                onChange={date=>setSelectedDate(date)}
                dateFormat='yyyy-MM-dd'/>
                    <span class="validity"></span>
                </label>
                <p>
                    <button onClick={submit}>Submit</button>
                </p>
            </form>
        </>
    )
 }


 export default AddCard