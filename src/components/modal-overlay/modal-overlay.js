import Modal from '../modal/modal.js';
import modalStyle from './modal-overlay.module.css'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ModalOverlay = ({ active, setActive, card, info }) => {
	const modalRoot = document.getElementById("modals");
	const closeModal = () => {
		setActive(false);
	}

	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				closeModal()
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [])

	return ReactDOM.createPortal(
		(active &&
			<div className={modalStyle.modal_container} onClick={closeModal}>
				<Modal renderto={card} toClose={closeModal} info={info} />
			</div >
		),
		modalRoot
	);
}
ModalOverlay.propTypes = {
	active: PropTypes.bool,
	card: PropTypes.bool,
	setActive: PropTypes.func,
}

export default ModalOverlay;