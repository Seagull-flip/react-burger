import modStyle from './modal.module.css'
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay.js';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { MODAL_DISACTIVE } from '../../services/actions/index.js'

const Modal = ({ children, title }) => {
	const dispatch = useDispatch();
	const toClose = () => {
		dispatch({ type: MODAL_DISACTIVE });
	}
	const modalRoot = document.getElementById("modals");

	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				toClose();
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [])

	return ReactDOM.createPortal(
		<ModalOverlay onClick={toClose}>
			<div className={`${modStyle.modal_content} pt-10 pr-10 pl-10 pb-15`} onClick={e => e.stopPropagation()}>
				<div className={modStyle.title}><div><span className="text text_type_main-medium">{title}</span></div><div className={modStyle.close} onClick={toClose}><CloseIcon type="primary" /></div></div>
				{children}

			</div>
		</ModalOverlay>
		,
		modalRoot
	);
}



// const Modal = ({ renderto, toClose, info }) => {
// 	return (
// 		<div className={`${modStyle.modal_content} pt-10 pr-10 pl-10 pb-15`} onClick={e => e.stopPropagation()}>
// 			<div className={modStyle.title}><div>{renderto && <span className="text text_type_main-medium">Детали ингредиента</span>}</div><div className={modStyle.close} onClick={toClose}><CloseIcon type="primary" /></div></div>
// 			{!renderto && <OrderDetails />}
// 			{renderto && <IngredientDetails data={info} />}
// 		</div>
// 	)
// }
// Modal.propTypes = {
// 	renderto: PropTypes.bool,
// 	toClose: PropTypes.func,
// }

export default Modal;