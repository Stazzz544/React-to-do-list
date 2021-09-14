import s from './App.module.css';
import ToDoListContainer from './components/todoList/ToDoListContainer'
import Header from './components/header/Header'
import About from './components/About/About'
import {
	Switch,
	Route,
 } from "react-router-dom";

function App() {
  return (
	<div className={s.mainWrapper}>
    <div className={s.mainContainer}>
		<Header/>
		<Switch>
			<Route exact path="/" component={ToDoListContainer}/>
			<Route exact path="/About" component={About}/>
		</Switch>
    </div>
	 </div>
  );
}

export default App;
