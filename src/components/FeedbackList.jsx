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

export default FeedbackList;
