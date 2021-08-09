import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import Tabs from '../tabs/tabs';
import BigCard from '../big-card/big-card';
import ingred from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details.js';
import Modal from '../modal/modal.js';
import { useSelector, useDispatch } from 'react-redux';

const BurgerIngredients = () => {
	const modalAct = useSelector(store => store.modal.ingredientsModalActive);
	const dataIngredients = useSelector(store => store.detailIngredients.detailIngrediens)

	return (
		<>
			{modalAct &&
				<Modal active={modalAct} title='Детали ингредиента'>
					<IngredientDetails data={dataIngredients} />
				</Modal>}

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
		</>
	)
}

BurgerIngredients.propTypes = {
	dat: PropTypes.arrayOf(PropTypes.shape({
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
	}).isRequired
	).isRequired
};

export default BurgerIngredients;

