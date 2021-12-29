import React from "react";


const Card = (props)=>{

    return(
        <div>
            <list>
                <h3>ID={props.ID}</h3>
                <h3>Title={props.title}</h3>
                <h3>DeadLine={props.deadline}</h3>
                <h3>Status={props.Status}</h3>
            </list>
        </div>
    )
}
export default Card;