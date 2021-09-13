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

	const onRemoveTask = (task) => {
		if(task.check === true) props.removeTask(task.task)
	}
	
	const onCheckTask = (task) => {
		props.checkTask(task)
	}


	return(
		<div className={s.container}>
			<input onInput={onAddLetter} type="text"  value={props.letters}/>
			<button onClick={onAddTask}>Add new task</button>
			<ul>
				{props.tasks.map((e, index) => 
					<li key={index} className={s.newTask}>
						<input onChange={() => onCheckTask(e.task)} checked={e.check}  type="checkbox"/>
						<div>{e.task}</div>
						<button onClick={() => onRemoveTask(e)}>DEL</button>
					</li>
				)}
			</ul>
		</div>
	);
}

export default ToDoList;