import React from "react";


function Card(props){

    return(
        <div className='bg-light-green dib br3 pa3 ma'>   
             <h3> Title= {props.info.title}</h3> 
             <h3> Deadline= {props.info.deadline}</h3>
             <h3> Status= {props.info.isCompleted.toString()}</h3> 
        </div>
    )
}
export default Card