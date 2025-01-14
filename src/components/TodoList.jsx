import TodoItem from './TodoItem';
import CompleteItem from './CompleteItem';
import PropTypes from 'prop-types';

function TodoList({
	todos,
	complete,
	handleDelete,
	handleComplete,
	handleEdit,
	handleCancel,
}) {
	return (
		<>
			{todos.map((item, i) => (
				<TodoItem
					key={i}
					item={item}
					index={i}
					handleDelete={handleDelete}
					handleComplete={handleComplete}
					handleEdit={handleEdit}
					handleCancel={handleCancel}
				/>
			))}

			{complete.map((item, i) => (
				<CompleteItem key={i} item={item} index={i} />
			))}
		</>
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
	handleComplete: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleCancel: PropTypes.func.isRequired,
};

export default TodoList;
