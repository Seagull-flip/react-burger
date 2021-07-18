import React from 'react';
import AppHeader from './components/app-header/app-header.js';
import BurgerConstructor from './components/burger-constructor/burger-constructor.js';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.js';



function App() {
	return (
		<>
			<AppHeader />
			<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<BurgerIngredients />
				<div className='pt-25'>
					<BurgerConstructor />
				</div>

			</div>

		</ >
	);
}

export default App;
