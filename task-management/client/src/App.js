import './App.css';
import CardList from './Components/CardList';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Route } from '../../server/routes/tasks';




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route>
            <CardList />
          </Route>
          <Route> 
            <AddCard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
