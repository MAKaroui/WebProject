import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Teams from './pages/team';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<NavBar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/team' component={Teams} />
		<Route path='/signin' component={SignIn} />
		<Route path='/signup' component={SignUp} />
	</Routes>
	</Router>
);  
}

export default App;
