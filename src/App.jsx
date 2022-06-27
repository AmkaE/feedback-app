import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = newFeedback => {
		setFeedback([{ ...newFeedback, id: uuidv4() }, ...feedback]);
	};

	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	return (
		<FeedbackProvider>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats />
								<FeedbackList handleDelete={deleteFeedback} />
								<AboutIconLink />
							</>
						}
					/>
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</div>
		</FeedbackProvider>
	);
};

export default App;
