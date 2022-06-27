import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
	const { deleteFeedback } = useContext(FeedbackContext);

	return (
		<Card reverse={true}>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	);
};

export default FeedbackItem;
