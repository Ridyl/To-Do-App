import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList({ todos, complete, handleDelete, handleCheck }) {
  return (
    <div className="task-area">
      <ul className="test-list">
        {todos.map((item, i) => (
          <TodoItem
            key={i}
            item={item}
            index={i}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </ul>

      <h1>Complete!</h1>
      <ul className="complete-test">
        {complete.map((item, i) => (
          <li key={i}>
            <h5>{item.job}</h5>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  // Prop validation for an array of objects array(object({key:type}))
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      job: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      pri: PropTypes.string.isRequired,
      edit: PropTypes.bool,
    }).isRequired
  ).isRequired,
  complete: PropTypes.arrayOf(
    PropTypes.shape({
      job: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      pri: PropTypes.string.isRequired,
      edit: PropTypes.bool,
    }).isRequired
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
}

export default TodoList;
