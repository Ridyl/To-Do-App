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
  const [wordTCount, setWordTCount] = useState(0);
  const [wordDCount, setWordDCount] = useState(0);

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
  }

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  }

  const handleCheck = (index) => {
    const updatedList = [...todoList];
    const checked = updatedList.splice(index, 1)[0];
    setTodoList(updatedList);
    setComplete(prevList => [...prevList, checked]);
  }

  const handleTCounter = (e) => {
    const inputLength = e.target.value.length;

    setWordTCount(inputLength);
  }
  const handleDCounter = (e) => {
    const inputLength = e.target.value.length;

    setWordDCount(inputLength);
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
            handleCounter={handleTCounter}
            tCount={wordTCount}
          />
        </div>
        <div className="col">
          <div className="accordion">
            <TodoList
              todos={todoList}
              complete={complete}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
              handleCounter={handleDCounter}
              dCount={wordDCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
