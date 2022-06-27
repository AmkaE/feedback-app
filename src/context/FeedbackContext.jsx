import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

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
