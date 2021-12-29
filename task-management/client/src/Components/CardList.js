// import React from "react";
// import Card from'./Card';



// const CardList= ({cards})=>{
// return(
//     <div className="App">
//         {
//             cards.map((card,i)=>{
//                 return(
//                 <Card 
//                     key={i}
//                     id={cards[i].id} 
//                     title={card[i].title}
//                     deadline={cards[i].deadline}
//                     status={cards[i].isCompleted}
//                 />
//                 )
//             })
//         } 
//     </div>
// )
// }
// export default CardList;
import React, {Component} from 'react';

export default class CardList extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Text from Element</div>)
    return (<div className="comptext">
    <h3>First Component</h3>
    <h1>Hello</h1>
        {this.props.displaytext}
        {element}
    </div>)
    }
}