import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Item framework - default low pri in the case of no change - edit false
const initialItem = {
  job: '',
  desc: '',
  pri: '1',
  edit: false,
};

function App() {

  const [todoList, setTodoList] = useState([]);
  const [listItem, setListItem] = useState(initialItem);
  const [complete, setComplete] = useState([]);
  const [titleCount, setTitleCount] = useState(0);
  const [descCount, setDescCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListItem({...listItem, [name]: value,});
  }

  function handleAdd() {
    if (!listItem.job || !listItem.desc) {
      alert("Please enter values in all fields.");
      return;
    }
    setTodoList(prevList => [...prevList, listItem]);
    setListItem(initialItem);
    setTitleCount(0);
    setDescCount(0);
  }

  const handleComplete = (index) => {
    const updatedList = [...todoList];
    const complete = updatedList.splice(index, 1)[0];
    setTodoList(updatedList);
    setComplete(prevList => [...prevList, complete]);
  }

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  }

  function handleTitleCounter(e) {
    const inputLength = e.target.value.length;

    setTitleCount(inputLength);
  }

  function handleDescCounter(e) {
    const inputLength = e.target.value.length;

    setDescCount(inputLength);
  }

  return (
    <div className='container'>
      <Header />
      <div className="row">
        <div className="col">
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
        <div className="col">
          <div className="card-group">
            <TodoList
              todos={todoList}
              complete={complete}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
