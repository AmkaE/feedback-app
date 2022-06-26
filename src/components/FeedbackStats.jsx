import PropType from 'prop-types';

const FeedbackStats = ({ feedback }) => {
	const totalFeedback = feedback.length;

	const average = (
		feedback.reduce((prevVal, currVal) => prevVal + currVal.rating, 0) /
		totalFeedback
	)
		.toFixed(1)
		.replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{totalFeedback}</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
};

// for type checking
FeedbackStats.propTypes = {
	feedback: PropType.array,
};

export default FeedbackStats;
