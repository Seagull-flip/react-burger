import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = (props) => {
	return (
		<div className={`${styles.container} pr-4 pl-4 ml-10`}>
			<ul>
				<li className='mb-4 ml-8'>
					<div className={styles.borderEdge}>
						<ConstructorElement
							type="top"
							isLocked={true}
							text="Краторная булка N-200i (верх)"
							price={20}
							thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
						/>
					</div>
				</li>
				<li className='mb-4'>
					<ul className={styles.scrollList}>
						{props.arr.map((elem) => {
							if (elem.type !== 'bun') {
								return (
									<li className='mb-4 ml-2'>
										<DragIcon type="primary" />
										<ConstructorElement text={elem.name} price={elem.price} thumbnail={elem.image} key={elem._id} />
									</li>)
							}
						})}
					</ul>
				</li>
				<li className='mb-4 ml-8'>
					<div>
						<ConstructorElement
							type="bottom"
							isLocked={true}
							text="Краторная булка N-200i (низ)"
							price={20}
							thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
						/>
					</div>
				</li>
			</ul>
			<section className={styles.bottomBoxContainer}>
				<p className="text text_type_digits-medium">610</p>
				<CurrencyIcon type="primary" />
				<div className='ml-10'>
					<Button type="primary" size="large">
						Оформить заказ
					</Button>
				</div>
			</section>

		</div>
	)
}

BurgerConstructor.propTypes = {
	arr: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})).isRequired
}

export default BurgerConstructor;