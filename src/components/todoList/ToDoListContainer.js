import ToDoList from "./ToDoList";
import {useSelector, useDispatch} from 'react-redux';
import { addLetterAC, addTaskAC } from "../../redux/reducers/ToDoReducer";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		letters: state.letters,
		tasks: state.tasks,
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		addLetter: (letter) => {
			dispatch(addLetterAC(letter))
		},
		addTask: (task) => {
			dispatch(addTaskAC(task))
		}
	}
}

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps) (ToDoList);

export default ToDoListContainer