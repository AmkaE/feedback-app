import PropType from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback }) => {
	if (!feedback || feedback.lenght === 0) {
		return <p>No Feeback Yet</p>;
	}

	return (
		<div>
			{feedback.map(item => (
				<FeedbackItem key={item.id} item={item} />
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
