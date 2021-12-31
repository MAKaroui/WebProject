import './App.css';
import CardList from './Components/CardList';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AddCard from './Components/AddCard';
import Navbar from './Components/Navbar';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <CardList />
          </Route>
          <Route exact path="/CreateTask"> 
            <h1>Please fill the task Components</h1>
            <AddCard/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App
