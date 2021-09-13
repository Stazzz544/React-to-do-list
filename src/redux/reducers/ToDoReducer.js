const ADD_LETTER = 'ADD_LETTER';
const ADD_TASK = 'ADD_TASK';
const DEL_TASK = 'DEL_TASK';


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
		case DEL_TASK:
			return {}
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

export default ToDoReducer