import PropType from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({ item, handleDelete }) => {
	return (
		<Card reverse={true}>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => handleDelete(item.id)}>
				<FaTimes color='purple' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	);
};

// for type checking
FeedbackItem.propType = {
	item: PropType.object.isRequired,
};

export default FeedbackItem;
