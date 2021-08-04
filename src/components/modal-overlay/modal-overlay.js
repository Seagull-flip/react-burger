import modalStyle from './modal-overlay.module.css'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ModalOverlay = ({ children, onClick }) => {


	return (
		<div className={modalStyle.modal_container} onClick={onClick}>
			{children}
		</div >
	);
}

ModalOverlay.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ModalOverlay;

