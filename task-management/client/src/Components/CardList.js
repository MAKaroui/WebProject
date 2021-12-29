import React from "react";
import Card from'./Card';



const CardList= ({cards})=>{
return(
    <div className="App">
        {
            cards.map((card,i)=>{
                return(
                <Card 
                    key={i}
                    id={cards[i].id} 
                    title={card[i].title}
                    deadline={cards[i].deadline}
                    status={cards[i].isCompleted}
                />
                )
            })
        } 
    </div>
)
}
export default CardList;