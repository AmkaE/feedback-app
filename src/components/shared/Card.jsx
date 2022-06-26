import PropType from 'prop-types';

const Card = ({ children, reverse }) => {
	return <div className={`card ${reverse ? 'reverse' : ''}`}>{children}</div>;
};

Card.defaultProps = {
	reverse: false,
};

Card.propType = {
	children: PropType.node.isRequired,
	reverse: PropType.bool,
};

export default Card;
