import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useState, Component, useContext } from 'react';
import Modal from '../modal/modal.js';
import OrderDetails from '../order-details/order-details.js'
import { AppDataContext } from '../../utils/context';

const BurgerConstructor = (props) => {
	const [modalActive, setModalActive] = React.useState(false);
	const [totalPrice, setTotalPrice] = React.useState(0);
	const [dataOrder, setDataOrder] = React.useState(0);
	const [numberOrder, setNumberOrder] = React.useState({
		loading: false,
		hasError: false,
		number: 0,
	});
	const { state, setState } = useContext(AppDataContext);
	const dataArr = state.data;
	const dataBun = state.data.find(elem => elem.type === 'bun');
	const orderToken = 'https://norma.nomoreparties.space/api/orders'

	console.log(dataArr)

	React.useEffect(() => {
		let total = 0;
		dataArr.map(elem => {
			if (elem._id == "60d3b41abdacab0026a733c7") {
				(total = total)
			}
			else if (elem.type !== 'bun') {
				(total += elem.price)
			} else {
				(total += elem.price * 2)
			}
		});
		setTotalPrice(total);
	},
		[dataArr, setTotalPrice]
	)

	React.useEffect(() => {
		let mass = [];
		dataArr.map(elem => {
			mass.push(elem._id)
		});
		setDataOrder(mass);
	}, [dataArr])

	useEffect(() => {
		fetch(orderToken, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 'ingredients': dataOrder })
		})
			.then((response) => {
				return response.json();
			})
			.then(data => setNumberOrder({ ...state, number: data.order.number, loading: false }))
			.catch(e => console.log('Something wrong'));
	}, [orderToken, dataOrder]);

	console.log(numberOrder.number)

	return (
		<>
			{modalActive &&
				<Modal active={modalActive} setActive={setModalActive} title=''>
					<OrderDetails number={numberOrder.number} />
				</Modal>
			}
			<div className={`${styles.container} pr-4 pl-4 ml-10`}>
				<ul>
					<li className='mb-4 ml-8'>
						<div className={styles.borderEdge}>
							{dataBun && <ConstructorElement
								type="top"
								isLocked={true}
								text={dataBun.name}
								price={dataBun.price}
								thumbnail={dataBun.image}
							/>}
						</div>
					</li>
					<li className='mb-4'>
						<ul className={styles.scrollList}>
							{dataArr.map((elem) => {
								if (elem.type !== 'bun') {
									return (
										<li className='mb-4 ml-2' key={elem._id} >
											<DragIcon type="primary" />
											<ConstructorElement text={elem.name} price={elem.price} thumbnail={elem.image} />
										</li>)
								}
							})}
						</ul>
					</li>
					<li className='mb-4 ml-8'>
						<div>
							{dataBun && <ConstructorElement
								type="bottom"
								isLocked={true}
								text={dataBun.name}
								price={dataBun.price}
								thumbnail={dataBun.image}
							/>}
						</div>
					</li>
				</ul>
				<section className={styles.bottomBoxContainer}>
					<p className="text text_type_digits-medium">{totalPrice}</p>
					<CurrencyIcon type="primary" />
					<div className='ml-10'>
						<Button type="primary" size="large" onClick={() => setModalActive(!modalActive)}>Оформить заказ</Button>
					</div>
				</section>
			</div >
		</>
	)
}

BurgerConstructor.propTypes = {
	arr: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		image_mobile: PropTypes.string.isRequired,
		image_large: PropTypes.string.isRequired,
		__v: PropTypes.number.isRequired
	})
	)
};
export default BurgerConstructor;