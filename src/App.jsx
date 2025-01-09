import './App.css'

function App() {

  // MOVE ALL THIS TO SEPARATE COMPONENT FILES
  return (
    <>
    {/* Header grouping */}
      <div className="header-group">
        <h1 className='header'>Very Simple Todo App</h1>
        <h4 className='sub-header'>Track All of the Things!</h4>
      </div>

      {/* Left side basic form */}
      {/* Will create a Bootstrap Card */}
      <div>
        <form className='add-todo'>
          <label htmlFor='job'>Title,</label>
          <input id='job' type='text' placeholder='Job to do...'></input>
          <label htmlFor='desc'>Description,</label>
          <input id='desc' type='text' placeholder='How to do it...'></input>
          <label htmlFor='pri'>Priority,</label>
          {/* Turn <select> into Bootstrap DropDown */}
          <select id='pri'>
            <option value={'low'}>Low</option>
            <option value={'med'}>Medium</option>
            <option value={'high'}>High</option>
          </select>
          <button type='button'>Add to List</button>
        </form>
      </div>

      {/* Vertical Bootstrap card groups with navigation to edit
      and delete button on right side of header */}
      <div className='task-area'>
        {/* will create card component that dynamically updates based off of priority selected 
        ul placeholder for now to get code working*/}
      </div>
    </>
  )
}

export default App
