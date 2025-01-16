import PropTypes from 'prop-types';

function Header({ handleDarkMode }) {
	return (
		<div className='container header-group'>
			<div className='row'>
				<h1>Very Simple Todo App</h1>
				<h4 className='text-secondary'>Track All of the Things!</h4>
				<div className='col'>
					<input
						type='checkbox'
						className='checkbox col'
						id='checkbox'
						onChange={handleDarkMode}
					/>
					<label htmlFor='checkbox' className='checkbox-label'>
						<i className='bi bi-brightness-high-fill'></i>
						<i className='bi bi-moon-fill'></i>
						<span className='ball'></span>
					</label>
				</div>
			</div>
		</div>
	);
}

Header.propTypes = {
	handleDarkMode: PropTypes.func.isRequired,
};

export default Header;
