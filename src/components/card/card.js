
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import st from './card.css';
import ModalOverlay from '../modal-overlay/modal-overlay.js'

const Card = (props) => {
	const [count, setCount] = React.useState(0);
	const [modalActive, setModalActive] = React.useState(false);
	const [isCard, setIsCard] = React.useState(false);
	const [cardInfo, setCardInfo] = React.useState(props.info);
	return (
		<>
			{modalActive && <ModalOverlay active={modalActive} setActive={setModalActive} card={isCard} info={cardInfo} />}
			<div className='ml-4 mb-8' style={{ width: '265px' }} onClick={() => {
				setCount(count + 1);
				setModalActive(true);
				setIsCard(true);

			}}>

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
		</>
	)
}
Card.propTypes = {
	price: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default Card;