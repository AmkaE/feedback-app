import { Route, Routes } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

const App = () => {
	return (
		<FeedbackProvider>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<FeedbackForm />
								<FeedbackStats />
								<FeedbackList />
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
