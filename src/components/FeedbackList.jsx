import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

const FeedbackList = () => {
	const { feedback, isLoadion } = useContext(FeedbackContext);

	if (!isLoadion && (!feedback || feedback.length === 0)) {
		return <p>No Feeback Yet</p>;
	}

	return isLoadion ? (
		<Spinner />
	) : (
		<div>
			{feedback.map(item => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default FeedbackList;
