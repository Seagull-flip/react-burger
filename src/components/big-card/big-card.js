import PropTypes from 'prop-types';
import Card from '../card/card';

const BigCard = (props) => {
	return (
		<div className='pt-6 pr-1 pb-10 pl-4' style={{ display: 'flex', flexWrap: 'wrap' }}>
			{props.arr.map((elem) => {
				if (elem.type == props.type) {
					return (
						<Card image={elem.image} price={elem.price} name={elem.name} key={elem._id} />
					)
				}
			})}
		</div>
	)
}

BigCard.propTypes = {
	arr: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.string.isRequired,
	})).isRequired
};

export default BigCard;