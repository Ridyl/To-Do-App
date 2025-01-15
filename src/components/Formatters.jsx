import PropTypes from 'prop-types';

function TextFormatter({ title, desc, pri }) {
	// formats title to start each word with capital letter
	const formatTitle = (title) => {
		const noCap = ['a', 'an', 'the', 'and', 'or', 'but', 'nor'];
		return title
			.split(' ')
			.map((word) => {
				// if the word matches any in [noCap] and it isn't the first or last word in the array
				if (
					noCap.includes(word.toLowerCase()) ||
					(word.length < 3 && !word.at(0)) ||
					!word.at(-1)
				) {
					return word.toLowerCase();
				}
				// return word with first char Uppercase
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(' ');
	};

	// very simple formatter to ensure general paragraph format is in the card,
	// Could implement API's to do this while also fixing structure, spelling, and other issues
	// but this will suffice for this project.
	const formatDesc = (desc) => {
		const punc = ['.', '!', '?'];
		let nextCap = false;
		return desc
			.split(' ')
			.map((word, index) => {
				// if word is first in desc or nextCap is true
				if (index == 0 || nextCap == true) {
					nextCap = false;
					return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
				}
				// if the last char in word is .
				if (punc.includes(word.substr(word.length - 1))) {
					nextCap = true;
				}
				// returns any other word all lower case
				return word.toLowerCase();
			})
			.join(' ');
	};

	// For modal title usage
	if (!desc) {
		return (
			<h5 className='modal-title'>
				<strong>Edit:</strong> {formatTitle(title)}
			</h5>
		);
	}

	return (() => {
		if (pri === '3') {
			return (
				<>
					<div className='card-header text-bg-light'>{formatTitle(title)}</div>
					<div className='card-body'>
						<p className='card-text'>{formatDesc(desc)}</p>
					</div>
				</>
			);
		} else if (pri === '2') {
			return (
				<>
					<div className='card-header text-bg-warning'>
						{formatTitle(title)}
					</div>
					<div className='card-body'>
						<p className='card-text'>{formatDesc(desc)}</p>
					</div>
				</>
			);
		} else if (pri === '1') {
			return (
				<>
					<div className='card-header text-bg-danger'>{formatTitle(title)}</div>
					<div className='card-body'>
						<p className='card-text' data-testid='todo-item'>
							{formatDesc(desc)}
						</p>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className='card-header text-bg-success'>
						{formatTitle(title)}
					</div>
					<div className='card-body'>
						<p className='card-text'>{formatDesc(desc)}</p>
					</div>
				</>
			);
		}
	})();
}

TextFormatter.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string,
	pri: PropTypes.string,
};

export default TextFormatter;
