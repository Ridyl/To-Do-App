import TextFormatter from './Formatters';

function EditForm(item) {
	return (
		<div className='modal fade'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<TextFormatter title={item} />
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<form className='edit-todo' id='edit-card'>
							<div className='mb-3'>
								<div className='form-floating'>
									<input
										name='job'
										value={item.job}
										maxLength={48}
										className='form-control'
										id='job'
									/>
									<label htmlFor='job'>Title:</label>
								</div>
							</div>
							<div className='mb-3'>
								<div className='form-floating'>
									<textarea
										name='desc'
										value={item.desc}
										maxLength={512}
										className='form-control'
										style={{ height: '240px' }}
										id='desciption'
									/>
									<label htmlFor='desc'>Description:</label>
								</div>
							</div>
							<div className='mb-3'>
								<div className='form-floating'>
									<select value={item.pri} name='pri' className='form-select'>
										<option value={1}>Low</option>
										<option value={2}>Med</option>
										<option value={3}>High</option>
									</select>
									<label htmlFor='pri'>Priority:</label>
								</div>
							</div>
						</form>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
							>
								Close
							</button>
							<button type='button' className='btn btn-primary'>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditForm;
