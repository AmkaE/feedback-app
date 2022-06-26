import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

const App = () => {
	const [feeeback, setFeeeback] = useState(FeedbackData);

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feeeback} />
			</div>
		</>
	);
};

export default App;
