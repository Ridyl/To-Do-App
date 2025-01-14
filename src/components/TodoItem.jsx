import PropTypes from 'prop-types';
import TextFormatter from './Formatters';

function TodoItem({ item, index, handleDelete, handleComplete, handleEdit }) {
	return (
		<div className='card'>
			{item.edit ? (
				<>
					<div className='card-header'>
						<input
							type='text'
							value={item.job}
							onChange={(e) => handleEdit(index, 'job', e.target.value)}
						/>
					</div>
					<div className='card-body'>
						<div className='card-text'>
							<textarea
								value={item.desc}
								onChange={(e) => handleEdit(index, 'desc', e.target.value)}
							/>
						</div>
						<select
							value={item.pri}
							onChange={(e) => handleEdit(index, 'pri', e.target.value)}
						>
							<option value='1'>Low</option>
							<option value='2'>Med</option>
							<option value='3'>High</option>
						</select>
					</div>
					<div className='card-footer'>
						<button onClick={() => handleEdit(index, 'edit', false)}>
							Save
						</button>
						<button onClick={() => handleEdit(index, 'edit', false)}>
							Cancel
						</button>
					</div>
				</>
			) : (
				<>
					<TextFormatter title={item.job} desc={item.desc} />
					<div className='card-footer row-col-2'>
						<button
							className='btn btn-success'
							name='complete'
							type='button'
							onClick={handleComplete}
							value={index}
						>
							Completed!
						</button>
						<button
							onClick={() => handleDelete(index)}
							value={index}
							className='btn btn-danger ms-2'
						>
							Delete
						</button>
						<button
							onClick={() => handleEdit(index, 'edit', true)}
							value={index}
							className='btn btn-secondary float-end'
						>
							Edit
						</button>
					</div>
				</>
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
	handleEdit: PropTypes.func,
};

export default TodoItem;
