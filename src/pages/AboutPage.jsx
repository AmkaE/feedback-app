import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
	return (
		<Card>
			<div className='about'>
				<h2>About This Project</h2>
				<p>Feedback app for products and services</p>
				<p>Version: 1.0.0</p>

				<Link to='/'>Go Back</Link>
			</div>
		</Card>
	);
};

export default AboutPage;
