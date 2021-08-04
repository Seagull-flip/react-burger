import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';



function App() {
	const token = 'https://norma.nomoreparties.space/api/ingredients';
	const [state, setState] = React.useState({
		loading: false,
		hasError: false,
		data: []
	});
	React.useEffect(() => {
		const getBurgerData = async () => {
			setState({ ...state, loading: true });
			try {
				const res = await fetch(`${token}`);
				const datas = await res.json();
				setState({ ...state, data: datas.data, loading: false });
			} catch (error) {
				setState({ ...state, hasError: true });
			}
		}
		getBurgerData();
	}, [])


	return (
		<>
			{state.hasError && <div>Ошибка выполнения запроса ...</div>}
			<AppHeader />
			<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<BurgerIngredients dat={state.data} />
				<div className='pt-25'>
					<BurgerConstructor arr={state.data} />
				</div>
			</div>
		</ >
	);
}

export default App;