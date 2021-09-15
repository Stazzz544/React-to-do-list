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
				tasks:[...state.tasks.filter(e => e.id !== action.id)]
			}
		case CHECK_TASK:
			
			return {
				...state,
				tasks: [...state.tasks.map(e => {
					if (e.id === action.id && e.check === false) {
						return({
							task: e.task, 
							check: true,
							id: e.id})
					} else if (e.id === action.id && e.check === true){
						return({
							task: e.task, 
							check: false,
							id: e.id})
					} else if (e.id !== action.id && e.check === true){
						return({
							task: e.task, 
							check: true,
							id: e.id})
					} else {
						return({
							task: e.task, 
							check: false,
							id: e.id})
					}})
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

export const removeTaskAC = (id) => ({
	type: REMOVE_TASK,  
	id
})

export const checkTaskAC = (id) => ({
	type: CHECK_TASK,  
	id
})

export default ToDoReducer