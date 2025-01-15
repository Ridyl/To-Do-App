function RandomQuote() {
	const quotes = [
		'Believe in yourself and all you do.',
		'Success is the result of hard work.',
		'Dream big, work hard, achieve greatness.',
		'Stay positive, work hard, make it happen.',
		'Courage is fear walking with determination.',
		'The best time to start is now.',
		'Mistakes are proof you are trying.',
		'Small steps lead to big achievements.',
		'Turn setbacks into opportunities for growth.',
		'Focus on progress, not just perfection.',
		'Great things never come from comfort zones.',
		'Embrace challenges and overcome your doubts.',
		'Every day is a new beginning, shine.',
		'Your potential is greater than your obstacles.',
		'Strength comes from struggle, keep moving forward.',
		'Success is a journey, not a destination.',
		'Happiness blooms from gratitude and persistence.',
		'Your mindset determines your future, stay strong.',
		'Failure is a stepping stone to success.',
		'Change your thoughts, and change your world.',
	];

	let random = Math.floor(Math.random() * quotes.length);

	return <small className='text-body-secondary'>{quotes[random]}</small>;
}

export default RandomQuote;
