import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoadion, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	// fetch feedback
	const fetchFeedback = async () => {
		const res = await fetch(
			'http://localhost:5000/feedback?_sort=id&_order=asc',
		);
		const data = await res.json();
		setFeedback(data);
		setIsLoading(false);
	};

	const addFeedback = newFeedback => {
		setFeedback([{ ...newFeedback, id: uuidv4() }, ...feedback]);
	};

	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = (id, updatedItem) => {
		if (feedbackEdit.edit) {
			return setFeedback(
				feedback.map(item =>
					item.id === id ? { ...item, ...updatedItem } : item,
				),
			);
		}
	};

	return (
		<FeedbackContext.Provider
			value={{
				//variables
				feedback,
				feedbackEdit,
				isLoadion,
				// functions
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
