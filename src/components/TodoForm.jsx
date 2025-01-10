import PropTypes from 'prop-types';

function TodoForm({ listItem, handleChange, handleAdd }) {
  return (
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
        onChange={handleChange}
      >
        <option value={1}>Low</option>

        <option value={2}>Med</option>

        <option value={3}>High</option>

      </select>
      <button type="button" onClick={handleAdd}>
        Add to List
      </button>
    </form>
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
