import s from './ToDoList.module.css'

const ToDoList = (props) => {

	const onAddLetter = (e) => {
		const letter = e.target.value
		props.addLetter(letter)
	}

	const onAddTask = () => {
		const task = props.letters;
		props.addTask({task: task, check: false,})
	}


	
	return(
		<div>
			<input type="checkbox"/>
			<input onInput={onAddLetter} type="text"  value={props.letters}/>
			<button onClick={onAddTask}>Add new task</button>
			<div>
				{props.tasks.map(e => 
				<ul>
				<li>{e.task}</li>)
				<ul>
				}
			</div>
		</div>
	);
}

export default ToDoList;