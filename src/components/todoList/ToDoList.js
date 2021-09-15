import { useState } from 'react'
import s from './ToDoList.module.css'

const ToDoList = (props) => {
	const [inputFocus, setInputActive] = useState('');
	
	const onAddLetter = (e) => {
		const letter = e.target.value
		props.addLetter(letter)
	}

	const onAddTask = () => {
		const task = props.letters;
		if (task) props.addTask({ 
			task: task,
			check: false, 
			id: Date.now() 
		})
		setInputActive('')
	}

	const onRemoveTask = (task) => {
		if (task.check === true) props.removeTask(task.id)
	}

	const onCheckTask = (id) => {
		props.checkTask(id)
	}


	return (
		<div className={s.container}>
			<div className={s.newTaskBtnWrapper} >
				<input className={s.newTaskInput} 
						 autoComplete="off" 
						 onClick={() => {setInputActive('focus')}}
						 onInput={onAddLetter} 
						 type="text" 
						 id='task'
						 value={props.letters} />
				<label className={`${s.newTaskInputLabel} ${inputFocus}`} 
						 htmlFor="task">Enter new task...</label>
				<button className={s.newTaskPushBtn}  onClick={onAddTask}>Add new task</button>
			</div>
			<ul>
				{props.tasks.length === 0 ?
				<div className={s.noTasks}>No tasks now...</div>
				:
				<div>
					{props.tasks.map((e) =>
					<li className={s.newTask} key={e.id}>
						<input className={s.newTaskCheckbox} 
								 onChange={() => onCheckTask(e.id)} 
								 checked={e.check} 
								 type="checkbox" />

						{e.check === false ?
						<div className={s.newTaskOut} >{e.task}</div>
						:
						<div className={`${s.newTaskOut} ${s.done}`} >{e.task}</div>
						}

						<div className={s.removeTaskBtn}
							  onClick={() => onRemoveTask(e)}>
							<svg 
							width="25" 
							xmlns="http://www.w3.org/2000/svg" 
							height="25" 
							viewBox="0 0 96 96" 
							xmlnsXlink="http://www.w3.org/1999/xlink">
								<path d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z" />
							</svg>
						</div>
					</li>
				)}
				</div>
				}
				
			</ul>
		</div>
	);
}

export default ToDoList;