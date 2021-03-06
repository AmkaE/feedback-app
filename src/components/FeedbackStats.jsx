import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
	const { feedback } = useContext(FeedbackContext);
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

export default FeedbackStats;
