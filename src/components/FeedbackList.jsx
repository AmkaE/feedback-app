import PropType from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feeback Yet</p>;
	}

	return (
		<div>
			{feedback.map(item => (
				<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
			))}
		</div>
	);
};

// for type checking
FeedbackList.propTypes = {
	// feedback: PropType.array,
	feedback: PropType.arrayOf(
		PropType.shape({
			id: PropType.number.isRequired,
			rating: PropType.number.isRequired,
			text: PropType.string.isRequired,
		}),
	),
};

export default FeedbackList;
