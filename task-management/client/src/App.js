import './App.css';
import CardList from './Components/CardList';
import Card from './Components/Card';


function App() {
  return (
    <div className="App">
       <CardList cards={CardList}
       />
    </div>
  );
}

export default App;
