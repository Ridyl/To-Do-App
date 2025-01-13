import PropTypes from 'prop-types';

function TextFormatter({title, desc}) {
    // formats title to start each word with capital letter
    const formatTitle = ((title) => {
        const noCap = ['a', 'an', 'the', 'and', 'or', 'but', 'nor'];
        return title
        .split(' ')
        .map((word) => {
            // if the word matches any in [noCap] and it isn't the first or last word in the array
            if(noCap.includes(word.toLowerCase()) || word.length < 3 && !word.at(0) || !word.at(-1)) {
            return word.toLowerCase();
            }
            // return word with first char Uppercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
    });
    
    // very simple formatter to ensure general paragraph format is in the card,
    // Could implement API's to do this while also fixing structure, spelling, and other issues
    // but this will suffice for this project.
    const formatDesc = ((desc) => {
        const punc = ['.', '!', '?'];
        let nextCap = false
        return desc
        .split(' ')
        .map((word, index) => {
            // if word is first in desc or nextCap is true
            if(index == 0 || nextCap == true) {
            nextCap = false;
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            // if the last char in word is .
            if(punc.includes(word.substr(word.length - 1))) {
            nextCap = true;
            }
            // returns any other word all lower case
            return word.toLowerCase();
        })
        .join(' ');
    });

    return (
        <div>
            <div className="card-header">
                <h5>{formatTitle(title)}</h5>
            </div>
            <div className="card-body">
                <p className='card-text'>{formatDesc(desc)}</p>
            </div>
        </div>
    );
}

TextFormatter.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default TextFormatter;