import PropTypes from 'prop-types';

function TodoForm({ listItem, handleChange, handleAdd, handleTitleCounter, handleDescCounter, titleCount, descCount }) {
  return (
      <div className="card">
        <h5 className="card-header">
          Create Your To-Do Item!
        </h5>
        <form className="add-todo" id='form-card'>
          <div className="mb-3">
            <div className="form-floating">
              <input
                name="job"
                value={listItem.job}
                onChange={(e) => {
                  handleChange(e);
                  handleTitleCounter(e);
                }}
                maxLength={48}
                className='form-control'
                id='job'
              />
              <p className='badge text-bg-secondary'>{titleCount} / 48</p>
              <label htmlFor="job">Title:</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                name="desc"
                value={listItem.desc}
                onChange={(e) => {
                  handleChange(e);
                  handleDescCounter(e);
                }}
                maxLength={512}
                className='form-control'
                id='description'
              />
              <p className='badge text-bg-secondary'>{descCount} / 512</p>
              <label htmlFor="desc">Description:</label>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-floating">
              <select
                value={listItem.pri}
                name="pri"
                onChange={handleChange}
                className='form-select'
              >
                <option value={1}>Low</option>
                <option value={2}>Med</option>
                <option value={3}>High</option>
              </select>
              <label htmlFor="pri">Priority:</label>
            </div>
          </div>
          <div className="">
            <button className='btn btn-primary' type="button" onClick={handleAdd}>
              Add to List
            </button>
          </div>
        </form>
        <div className="card-footer text-body-secondary">
          Procrastination No More!
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
  handleAdd: PropTypes.func.isRequired,
  handleTitleCounter: PropTypes.func.isRequired,
  handleDescCounter: PropTypes.func.isRequired,

  titleCount: PropTypes.number,
  descCount: PropTypes.number,
}

export default TodoForm;
