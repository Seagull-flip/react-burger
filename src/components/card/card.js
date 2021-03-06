import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import st from './card.css';

const Card = ({ onclick, image, price, name, ondetails, info }) => {
	const [count, setCount] = React.useState(0);
	const onClick = () => {
		onclick(true);
		ondetails(info)
	}
	return (
		<>
			<div className='ml-4 mb-8' style={{ width: '265px' }} onClick={onClick}>

				<div style={{ position: 'relative' }}>
					<Counter count={count} size="default" />
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<img className='mb-1' src={image}></img>
					<div className='mb-1' style={{ display: 'flex' }}><p className="text text_type_digits-default">{price}</p><CurrencyIcon type="primary" /></div>
				</div>

				<div className={st.textCont}>
					<p className="text text_type_main-default" style={{ textAlign: "center" }}>
						{name}
					</p>
				</div>
			</div >
		</>
	)
}
Card.propTypes = {
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default Card;