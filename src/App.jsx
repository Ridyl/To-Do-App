import { useState } from 'react'
import './App.css'

// Item framework - default low pri in the case of no change
const initialItem = {
  job: '',
  desc: '',
  pri: '',
  edit: false,
};

function App() {
  const [todoList, addTodoList] = useState([]);
  const [listItem, setListItem] = useState(initialItem);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setListItem({
      ...listItem,
      [name]: value,
    });
  }

  function handleAdd() {
    // Push to array for later access and rendering
    addTodoList(prevList => [...prevList, listItem]);
    // Reset listItem to initialItem to accept more
    setListItem(initialItem);
  }

  // MOVE ALL THIS TO SEPARATE COMPONENT FILES
  return (
    <>
      {/* Header grouping */}
      <div className="header-group">
        <h1 className="header">Very Simple Todo App</h1>
        <h4 className="sub-header">Track All of the Things!</h4>
      </div>

      {/* Left side basic form */}
      {/* Will create a Bootstrap Card */}
      <div>
        <form className="add-todo">
          <label htmlFor="job">Title,</label>
          <input
            name="job"
            value={listItem.job}
            onChange={handleChange}
            placeholder="Job to do..."
          />

          <label htmlFor="desc">Description,</label>
          <input
            name="desc"
            value={listItem.desc}
            onChange={handleChange}
            placeholder="How to do it..."
          />

          <label htmlFor="pri">Priority,</label>
          {/* Turn <select> into Bootstrap DropDown */}
          <select
            value={listItem.pri}
            name="pri"
            onChange={(e) => handleChange(e)}
          >
            <option value={1}>Low</option>

            <option value={2}>Med</option>

            <option value={3}>High</option>
            
          </select>
          <button type="button" onClick={handleAdd}>
            Add to List
          </button>
        </form>
      </div>

      {/* Vertical Bootstrap card groups with navigation to edit
      and delete button on right side of header */}
      <div className="task-area">
        {/* will create card component that dynamically updates based off of priority selected 
        ul placeholder for now to get code working*/}
        <ul className="test-list">
          {todoList.map((item, i) => {
            return (
              <li key={i}>
                <h5>{item.job}</h5>
                <p>{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App
