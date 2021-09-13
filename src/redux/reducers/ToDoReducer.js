const ADD_LETTER = 'ADD_LETTER';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'DEL_TASK';
const CHECK_TASK = 'CHECK_TASK';


const initialState = {
	tasks: [],
	letters: '',
}

const ToDoReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_LETTER:
			return {
				...state,
				letters: action.letter
			}
		case ADD_TASK:
			return {
				...state,
				tasks:[...state.tasks, action.task],
				letters: '',
			}
		case REMOVE_TASK:
			return {
				...state,
				tasks:[...state.tasks.filter(e => e.task !== action.task)]
			}
		case CHECK_TASK:
			return {
				...state,
				tasks: [...state.tasks.map(e => {
					if (e.task === action.task && e.check === false) {
						return({
							task: e.task, 
							check: true})
					} else if (e.task === action.task && e.check === true){
						return({
							task: e.task, 
							check: false})
					} else if (e.task !== action.task && e.check === true){
						return({
							task: e.task, 
							check: true})
					} else {
						return({
							task: e.task, 
							check: false})
					}
					
					})
				]}
		default:
			return state;
	}
}

export const addLetterAC = (letter) => ({
	type: ADD_LETTER,  
	letter
})

export const addTaskAC = (task) => ({
	type: ADD_TASK,  
	task
})

export const removeTaskAC = (task) => ({
	type: REMOVE_TASK,  
	task
})

export const checkTaskAC = (task) => ({
	type: CHECK_TASK,  
	task
})

export default ToDoReducer