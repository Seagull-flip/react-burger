import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import Tabs from '../tabs/tabs';
import BigCard from '../big-card/big-card';
import ingred from './burger-ingredients.module.css';
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
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
					<BigCard arr={props.dat} type='bun' />
				</div>
				<div>
					<p className="text text_type_main-medium">
						Соусы
					</p>
					<BigCard arr={props.dat} type='sauce' />
				</div>
				<div>
					<p className="text text_type_main-medium">
						Начинки
					</p>
					<BigCard arr={props.dat} type='main' />
				</div>
			</section>
		</section>
	)
}

export default BurgerIngredients;

