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
	handleShow,
	show,
}) {
	return (
		<>
			<div>
				{todos.map((item, i) => (
					<TodoItem
						key={i}
						item={item}
						index={i}
						handleDelete={handleDelete}
						handleComplete={handleComplete}
						handleEdit={handleEdit}
						handleCancel={handleCancel}
						handleShow={handleShow}
					/>
				))}
			</div>
			{show ? (
				<div className='accordion' id='complete-accordion'>
					<div className='accordion-item'>
						<h2 className='accordion-header'>
							<button
								className='accordion-button collapsed'
								type='button'
								id='accordion-button'
								data-bs-toggle='collapse'
								data-bs-target='#accordion-item'
								aria-controls='accordian-item'
								aria-expanded='true'
							>
								Completed To-Do List!
							</button>
						</h2>
						<div
							className='accordion-collapse collapse'
							id='accordion-item'
							data-bs-parent='#complete-accordion'
						>
							<div className='accordion-body'>
								{complete.map((item, i) => (
									<CompleteItem
										key={i}
										item={item}
										index={i}
										handleDelete={handleDelete}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
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
	handleShow: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleCancel: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
};

export default TodoList;
