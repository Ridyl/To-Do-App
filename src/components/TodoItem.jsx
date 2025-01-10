import PropTypes from 'prop-types';

function TodoItem({ item, index, handleDelete, handleCheck }) {
  return (
    <li key={index}>
      <h5>{item.job}</h5>
      <p>{item.desc}</p>
      <input type='checkbox' onChange={handleCheck} value={index}/>
      <button onClick={() => handleDelete(index)} value={index}>Delete</button>
    </li>
  );
}

TodoItem.propTypes = {
  // Prop validation for an array of objects array(object({key:type}))
  item: PropTypes.shape({
    job: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    pri: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default TodoItem;
