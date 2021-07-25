import React from 'react';
import AppHeader from '../app-header/app-header.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import { databurg } from '../../utils/data'


function App() {
	return (
		<>
			<AppHeader />
			<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<BurgerIngredients dat={databurg} />
				<div className='pt-25'>
					<BurgerConstructor arr={databurg} />
				</div>

			</div>

		</ >
	);
}

export default App;