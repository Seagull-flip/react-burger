import React, { useEffect, useState, Component } from 'react';
import AppHeader from '../app-header/app-header.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import styles from './app.module.css';
import { getBurgerData } from '../../services/actions/index.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getBurgerData())
	}, [])
	// const token = 'https://norma.nomoreparties.space/api/ingredients';
	// const [state, setState] = React.useState({
	// 	loading: false,
	// 	hasError: false,
	// 	data: []
	// });
	// React.useEffect(() => {
	// 	const getBurgerData = async () => {
	// 		setState({ ...state, loading: true });
	// 		try {
	// 			const res = await fetch(`${token}`);
	// 			const datas = await res.json();
	// 			setState({ ...state, data: datas.data, loading: false });
	// 		} catch (error) {
	// 			setState({ ...state, hasError: true });
	// 		}
	// 	}
	// 	getBurgerData();
	// }, [])


	return (
		<>

			<AppHeader />
			<div className={styles.mainContainer}>

				<BurgerIngredients />
				<div className='pt-25'>
					<BurgerConstructor />
				</div>

			</div>
		</ >
	);
}

export default App;