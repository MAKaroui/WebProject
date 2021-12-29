import './App.css';
import CardList from './Components/CardList';
import {cards} from '/dummy_data2';


function App() {
  return (
    <div className="App">
       <CardList cards={cards}
       />
    </div>
  );
}

export default App;
