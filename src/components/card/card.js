
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import st from './card.css';

const Card = (props) => {
	const [count, setCount] = React.useState(0);
	return (
		<div className='ml-4 mb-8' style={{ width: '265px' }} onClick={() => setCount(count + 1)}>
			<div style={{ position: 'relative' }}>
				<Counter count={count} size="default" />
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<img className='mb-1' src={props.image}></img>
				<div className='mb-1' style={{ display: 'flex' }}><p className="text text_type_digits-default">{props.price}</p><CurrencyIcon type="primary" /></div>
			</div>

			<div className={st.textCont}>
				<p className="text text_type_main-default" style={{ textAlign: "center" }}>
					{props.name}
				</p>
			</div>
		</div >
	)
}
Card.propTypes = {
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default Card;