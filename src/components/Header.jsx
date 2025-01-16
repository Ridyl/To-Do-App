import PropTypes from 'prop-types';

function Header({ handleDarkMode }) {
	return (
		<div className='row'>
			<h1 className='header'>Very Simple Todo App</h1>
			<h4 className='sub-header'>Track All of the Things!</h4>
			<div>
				<input
					type='checkbox'
					className='checkbox'
					id='checkbox'
					onChange={handleDarkMode}
				/>
				<label htmlFor='checkbox' className='checkbox-label'>
					<i className='bi bi-moon-fill'></i>
					<i className='bi bi-brightness-high-fill'></i>
					<span className='ball'></span>
				</label>
			</div>
		</div>
	);
}

Header.propTypes = {
	handleDarkMode: PropTypes.func.isRequired,
};

export default Header;
