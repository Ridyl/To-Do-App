import PropTypes from 'prop-types';

// formats title to start each word with capital letter
function titleFormatter(title) {
  const noCap = ['a', 'an', 'the', 'and', 'or', 'but', 'nor'];

  return title
    .split(' ')
    .map((word) => {
    // if the word matches any in [noCap] and it isn't the first or last word in the array
      if(noCap.includes(word.toLowerCase()) || word.length < 3 && !word.at(0) || !word.at(-1)) {
        return word.toLowerCase();
      }
    // return word with first char Uppercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

// very simple formatter to ensure general paragraph format is in the card,
// Could implement API's to do this while also fixing structure and other issues
// but this will suffice for this project.
function descFormatter(desc) {
  let nextCap = false
  return desc
    .split(' ')
    .map((word, index) => {
      // if word is first in desc or nextCap is true
      if(index == 0 || nextCap == true) {
        nextCap = false;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }

      // if the last char in word is .
      if(word.substr(word.length - 1) === '.') {
        nextCap = true;
      }
      // returns any other word all lower case
      return word.toLowerCase();
    })
    .join(' ');
}
function TodoItem({ item, index, handleDelete, handleCheck }) {
  return (
    <div className="card">
      <div key={index} className='card-body container'>
        <div className="card-title row">
          <h5>{titleFormatter(item.job)}</h5>
        </div>
        <div className="card-text row">
          <p>{descFormatter(item.desc)}</p>
        </div>
        <div className="card-text row-col-3">
          <button 
            className='btn btn-success' 
            name='complete' type='checkbox' 
            onChange={handleCheck} 
            value={index}>
            Completed!
          </button>
          <button 
            onClick={() => handleDelete(index)} 
            value={index} 
            className='btn btn-danger'>
            Delete
          </button>
        </div>
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
  handleCheck: PropTypes.func.isRequired,
};

export default TodoItem;
