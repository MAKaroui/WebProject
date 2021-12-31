import React from 'react';
import './App.css';
import CardList from './Components/CardList';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import AddCard from './Components/AddCard';
import Navbar from './Components/Navbar';



function App() {
  return (
    <h1>it works</h1>,
    <Router>
      
      <div className="App">
        <Navbar/>
    <Routes>
          <Route exact path="/" component={CardList} >
          <CardList />
            </Route>
          <Route exact path="/CreateTask" component={AddCard} > 
          <h1>Please fill the task Components</h1>
            <AddCard/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
