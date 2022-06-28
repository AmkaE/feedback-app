import { createContext, useState, useEffect } from 'react';

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
		try {
			const res = await fetch(
				'http://localhost:5000/feedback?_sort=id&_order=desc',
			);
			const data = await res.json();
			setFeedback(data);
			setIsLoading(false);
		} catch (err) {
			console.error('Error: ', err);
		}
	};

	const addFeedback = async newFeedback => {
		try {
			const config = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newFeedback),
			};
			const res = await fetch('http://localhost:5000/feedback', config);
			const data = await res.json();
			setFeedback([data, ...feedback]);
		} catch (err) {
			console.error('Error: ', err);
		}
	};

	const deleteFeedback = async id => {
		if (window.confirm('Are you sure you want to delete')) {
			try {
				const config = {
					method: 'DELETE',
				};
				await fetch(`http://localhost:5000/feedback/${id}`, config);

				setFeedback(feedback.filter(item => item.id !== id));
			} catch (err) {
				console.error('Error: ', err);
			}
		}
	};

	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = async (id, updatedItem) => {
		try {
			const config = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedItem),
			};

			const res = await fetch(`http://localhost:5000/feedback/${id}`, config);
			const data = await res.json();

			setFeedback(feedback.map(item => (item.id === id ? data : item)));
			setFeedbackEdit({
				item: {},
				edit: false,
			});
		} catch (err) {
			console.error('Error: ', err);
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
