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
	feedback: PropType.array,
};

export default FeedbackList;
