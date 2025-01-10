import PropTypes from 'prop-types';

function TodoForm({ listItem, handleChange, handleAdd }) {
  return (
    <div className="row">
      <div className="card">
        <div className="container">
          <form className="add-todo">
            <div className="row">
              <label htmlFor="job">Title:</label>
              <input
                name="job"
                value={listItem.job}
                onChange={handleChange}
                maxLength={48}
                placeholder="Job to do..."
              />
            </div>
            <div className="row">
              <label htmlFor="desc">Description:</label>
              <textarea
                name="desc"
                value={listItem.desc}
                onChange={handleChange}
                maxLength={512}
                placeholder="How to do it..."
                id='description'
              />
            </div>
            <div className="row">
              <label htmlFor="pri">Priority:</label>
              {/* Turn <select> into Bootstrap DropDown */}
              <select
                value={listItem.pri}
                name="pri"
                onChange={handleChange}
              >
                <option value={1}>Low</option>
                <option value={2}>Med</option>
                <option value={3}>High</option>
              </select>
            </div>
            <div className="row">
              <button className='btn btn-primary' type="button" onClick={handleAdd}>
                Add to List
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

TodoForm.propTypes = {
  // validation of object and keys
  listItem: PropTypes.shape({
    job: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    pri: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired
}

export default TodoForm;
