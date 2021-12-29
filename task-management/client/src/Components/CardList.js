import React from "react";
import Card from'./Card';
import AddCard from "./AddCard";
import dummy_data from './dummy_data';
import { useState } from "react";
import {Link} from 'react-router-dom'

function CardList (){
    

    return(
           <div className=''>

                <h1>Your Tasks     </h1>

               {    
                    dummy_data.map(info =><Card info= {info}/>)
               }    
                <Link to="/createTask">Add Taks</Link>
           </div> 
)}
export default CardList   