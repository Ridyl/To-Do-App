import PropTypes from 'prop-types';
import TextFormatter from './Formatters';

function TodoItem({
	item,
	index,
	handleDelete,
	handleComplete,
	handleEdit,
	handleCancel,
	handleShow,
}) {
	return (
		<div className='card'>
			{/* If edit key = true */}
			{item.edit ? (
				<div>
					<div className='card-header'>
						<div className='form-floating'>
							<input
								id='job'
								type='text'
								className='form-control'
								value={item.job}
								onChange={(e) => handleEdit(index, 'job', e.target.value)}
							/>
							<label htmlFor='job'>Title:</label>
						</div>
					</div>
					<div className='card-body'>
						<div className='card-text'>
							<div className='form-floating mb-3'>
								<textarea
									className='form-control'
									id='description'
									value={item.desc}
									onChange={(e) => handleEdit(index, 'desc', e.target.value)}
									data-testid='update-todo-text'
								/>
								<label htmlFor='description'>Description:</label>
							</div>
						</div>
						<select
							className='form-control'
							value={item.pri}
							onChange={(e) => handleEdit(index, 'pri', e.target.value)}
						>
							<option value={'3'}>Low</option>
							<option value={'2'}>Med</option>
							<option value={'1'}>High</option>
						</select>
					</div>
					<div className='card-footer'>
						<button
							className='btn btn-primary'
							onClick={() => handleEdit(index, 'edit', false)}
							data-testid='update-todo'
						>
							Save
						</button>
						<button
							className='btn btn-danger float-end'
							onClick={() => handleCancel(index, 'edit', false)}
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				// if edit key = false
				<div>
					<TextFormatter title={item.job} desc={item.desc} pri={item.pri} />
					{/* <div>
						<p className='card-header text-bg-light'>{item.job}</p>
						<div className='card-body'>
							<p className='card-text' data-testid='todo-item'>
								{item.desc}
							</p>
						</div>
					</div> */}
					<div className='card-footer row-col-2'>
						<button
							className='btn btn-success'
							name='complete'
							type='button'
							onClick={() => {
								handleComplete(index);
								handleShow();
							}}
							value={index}
							data-testid='create-todo'
						>
							<i className='bi bi-check-lg'></i>
						</button>
						<button
							onClick={() => handleDelete(index, item.pri)}
							value={index}
							className='btn btn-danger float-end ms-2'
							data-testid='delete-todo'
						>
							<i className='bi bi-trash3-fill'></i>
						</button>
						<button
							onClick={() => handleEdit(index, 'edit', true)}
							value={index}
							className='btn btn-secondary float-end'
							data-testid='edit-todo'
						>
							<i className='bi bi-pencil-fill'></i>
						</button>
					</div>
				</div>
			)}
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
	handleShow: PropTypes.func.isRequired,
	handleEdit: PropTypes.func,
	handleCancel: PropTypes.func,
};

export default TodoItem;
