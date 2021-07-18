import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import { databurg } from '../../utils/data.js';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingred from './burger-ingredients.module.css';
import PropTypes from 'prop-types';

const BurgerIngredients = () => {
	return (
		<section style={{ width: '600px' }}>
			<div className='mt-10 mb-5'>
				<p className="text text_type_main-large">
					Соберите бургер
				</p>
			</div>
			<div className='mb-10'>
				<Tabs />
			</div>
			<section className={ingred.scrollingSection}>
				<div>
					<p className="text text_type_main-medium">
						Булки
					</p>
					<BigCard type='bun' />
				</div>
				<div>
					<p className="text text_type_main-medium">
						Соусы
					</p>
					<BigCard type='sauce' />
				</div>
				<div>
					<p className="text text_type_main-medium">
						Начинки
					</p>
					<BigCard type='main' />
				</div>
			</section>
		</section>
	)
}



const Tabs = () => {
	const [current, setCurrent] = React.useState('one');
	return (
		<div style={{ display: 'flex' }}>
			<Tab value="one" active={current === 'one'} onClick={setCurrent}>
				Булки
			</Tab>
			<Tab value="two" active={current === 'two'} onClick={setCurrent}>
				Соусы
			</Tab>
			<Tab value="three" active={current === 'three'} onClick={setCurrent}>
				Начинки
			</Tab>
		</div>
	)
}

const BigCard = (props) => {
	return (
		<div className='pt-6 pr-1 pb-10 pl-4' style={{ display: 'flex', flexWrap: 'wrap' }}>
			{databurg.map((elem) => {
				if (elem.type == props.type) {
					return (
						<Card image={elem.image} price={elem.price} name={elem.name} />
					)
				}
			})}
		</div>
	)
}

BigCard.propTypes = {
	type: PropTypes.string
};

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

			<div className={ingred.textCont}>
				<p className="text text_type_main-default" style={{ textAlign: "center" }}>
					{props.name}
				</p>
			</div>
		</div >
	)
}
Card.propTypes = {
	price: PropTypes.number,
	image: PropTypes.string,
	name: PropTypes.string,
}






export default BurgerIngredients;

