import PropTypes from 'prop-types';
import TextFormatter from './Formatters';

function TodoItem({ item, index, handleDelete, handleComplete, handleEdit }) {
  return (
    <div className='card'>
      <TextFormatter title={item.job} desc={item.desc}/>
      <div className="card-footer row-col-2">
        <button 
          className='btn btn-success' 
          name='complete' 
          type='button' 
          onClick={handleComplete} 
          value={index}>
          Completed!
        </button>
        <button 
          onClick={() => handleDelete(index)} 
          value={index} 
          className='btn btn-danger ms-2'>
          Delete
        </button>
        <button 
        onClick={handleEdit}
        value={index}
        className='btn btn-secondary float-end'
        >
          Edit
        </button>
      </div>
    </div>
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
  handleComplete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func,
};

export default TodoItem;
