import spinner from '../assets/spinner.gif';

const Spinner = () => {
	return (
		<>
			<img
				src={spinner}
				alt='spinner loading icon'
				style={{ width: '100px', margin: 'auto', display: 'block' }}
			/>
		</>
	);
};

export default Spinner;
