import PropTypes from 'prop-types';
import TextFormatter from './Formatters';
import RandomQuote from './RandomQuotes';
import { useMemo } from 'react';

function CompleteItem({ item, handleDelete, index }) {
	// Stores the quote as a variable so it isn't constantly updated on user input
	const quote = useMemo(() => <RandomQuote />, []);
	// Sets pri for complete items
	item.pri = '4';
	return (
		<div className='accordian-item'>
			<div className='card'>
				<TextFormatter title={item.job} desc={item.desc} pri={item.pri} />
				<div className='card-footer'>
					{quote}
					<button
						onClick={() => handleDelete(index, item.pri)}
						value={index}
						className='btn btn-danger float-end btn-sm'
						id='final-delete'
					>
						<i className='bi bi-trash3-fill'></i>
					</button>
				</div>
			</div>
		</div>
	);
}

CompleteItem.propTypes = {
	// Prop validation for an array of objects array(object({key:type}))
	item: PropTypes.shape({
		job: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
		pri: PropTypes.string.isRequired,
		edit: PropTypes.bool,
	}).isRequired,
	index: PropTypes.number.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default CompleteItem;
