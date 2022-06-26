import PropType from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	type: 'button',
	version: 'primary',
	isDisabled: false,
};

// for type checking
Button.propType = {
	children: PropType.node.isRequired,
	type: PropType.string,
	version: PropType.string,
	isDisabled: PropType.bool,
};

export default Button;
