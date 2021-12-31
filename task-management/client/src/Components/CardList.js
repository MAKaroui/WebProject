import React from "react";
import Card from'./Card';
import dummy_data from './dummy_data';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function CardList (){
     const [data, setdata] = useState([])
     useEffect(() => {
         axios.get('http://localhost:8000/api/tasks')
         .then(res => {
             setdata(res.data)
             console.log(res.data)
         })
         .catch(e => console.log(e))
     }, [])

    return(
           <div className=''>

                <h1>Your Tasks</h1>
               {    
                    data.map(info =><Card info= {info}/>)
               }    
           </div> 
)}
export default CardList   