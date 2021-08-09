import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useState, Component, useContext } from 'react';
import Modal from '../modal/modal.js';
import OrderDetails from '../order-details/order-details.js'
import { useSelector, useDispatch } from 'react-redux';
import { getOrderNumber } from '../../services/actions/index.js';
import { ORDER_MODAL_ACTIVE } from '../../services/actions/index.js'

const BurgerConstructor = (props) => {
	const data = useSelector(store => store.bigData.data);
	const modalActive = useSelector(store => store.modal.orderModalActive);
	const orderNumber = useSelector(store => store.orderData.orderNumber)
	const dispatch = useDispatch();

	const [totalPrice, setTotalPrice] = React.useState(0);
	const [dataOrder, setDataOrder] = React.useState(0);
	const dataBun = data.find(elem => elem.type === 'bun');

	const toOpen = () => {
		dispatch(getOrderNumber(dataOrder));
		dispatch({ type: ORDER_MODAL_ACTIVE });
	}


	React.useEffect(() => {
		let total = 0;
		data.map(elem => {
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
		[data, setTotalPrice]
	)

	React.useEffect(() => {
		let mass = [];
		data.map(elem => {
			mass.push(elem._id)
		});
		setDataOrder(mass);
	}, [data])


	return (
		<>
			{modalActive &&
				<Modal title=''>
					<OrderDetails number={orderNumber} />
				</Modal>
			}
			<div className={`${styles.container} pr-4 pl-4 ml-10`}>
				<ul>
					<li className='mb-4 ml-8'>
						<div className={styles.borderEdge}>
							{dataBun && <ConstructorElement
								type="top"
								isLocked={true}
								text={`${dataBun.name} (верх)`}
								price={dataBun.price}
								thumbnail={dataBun.image}
							/>}
						</div>
					</li>
					<li className='mb-4'>
						<ul className={styles.scrollList}>
							{data.map((elem) => {
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
								text={`${dataBun.name} (низ)`}
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
						<Button type="primary" size="large" onClick={toOpen}>Оформить заказ</Button>
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