import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Item framework - default low pri in the case of no change - edit false
const initialItem = {
	job: '',
	desc: '',
	pri: '3',
	edit: false,
};

function App() {
	const [todoList, setTodoList] = useState([]);
	const [listItem, setListItem] = useState(initialItem);
	const [complete, setComplete] = useState([]);
	const [savedEdit, setSavedEdit] = useState({});
	const [titleCount, setTitleCount] = useState(0);
	const [descCount, setDescCount] = useState(0);
	const [show, setShow] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setListItem({ ...listItem, [name]: value });
	};

	const handleAdd = () => {
		if (!listItem.job || !listItem.desc) {
			alert('Please enter values in all fields.');
			return;
		}
		setTodoList((prevList) => [...prevList, listItem]);

		setListItem(initialItem);
		setTitleCount(0);
		setDescCount(0);
	};

	const handleComplete = (index) => {
		const updatedList = [...todoList];
		const complete = updatedList.splice(index, 1)[0];
		setTodoList(updatedList);
		setComplete((prevList) => [...prevList, complete]);
	};

	const handleDelete = (index, pri) => {
		if (pri < 4) {
			const updatedList = [...todoList];
			updatedList.splice(index, 1);
			setTodoList(updatedList);
		} else {
			const updatedCompleteList = [...complete];
			updatedCompleteList.splice(index, 1);
			setComplete(updatedCompleteList);
			if (complete.length === 1) {
				setShow(false);
			}
		}
	};

	const handleEdit = (index, key, value) => {
		setTodoList((prevList) => {
			const updatedList = [...prevList];
			if (key === 'edit' && value === true) {
				setSavedEdit({ ...updatedList[index] });
			}
			updatedList[index] = { ...updatedList[index], [key]: value };
			return updatedList;
		});
	};

	const handleCancel = (index) => {
		setTodoList((prevList) => {
			const updatedList = [...prevList];
			updatedList[index] = { ...savedEdit, edit: false };
			return updatedList;
		});
	};

	function handleTitleCounter(e) {
		const inputLength = e.target.value.length;

		setTitleCount(inputLength);
	}

	function handleDescCounter(e) {
		const inputLength = e.target.value.length;

		setDescCount(inputLength);
	}

	function handleShow() {
		if (show === false) {
			setShow(true);
		}
	}

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
		const htmlElement = document.querySelector('html');
		htmlElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
	};

	return (
		<>
			<div className='container'>
				<Header handleDarkMode={handleDarkMode} />
				<div className='row'>
					<div className='col'>
						<TodoForm
							listItem={listItem}
							handleChange={handleChange}
							handleAdd={handleAdd}
							handleTitleCounter={handleTitleCounter}
							titleCount={titleCount}
							handleDescCounter={handleDescCounter}
							descCount={descCount}
						/>
					</div>
					<div className='col'>
						<TodoList
							todos={todoList}
							complete={complete}
							handleDelete={handleDelete}
							handleComplete={handleComplete}
							handleEdit={handleEdit}
							handleCancel={handleCancel}
							handleShow={handleShow}
							show={show}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
