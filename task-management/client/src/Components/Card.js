import React from "react";


const Card = (props)=>{

    return(
        <div>
            <h1> name={props.name}</h1>
            <h1> deadline={props.deadline}</h1>
            <h1> Status={props.Status}</h1>
        </div>
    )
}
export default Card;