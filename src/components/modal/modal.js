import modStyle from './modal.module.css'
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import OrderDetails from '../order-details/order-details.js'
import IngredientDetails from '../ingredient-details/ingredient-details.js'

const Modal = ({ renderto, toClose, info }) => {
	return (
		<div className={`${modStyle.modal_content} pt-10 pr-10 pl-10 pb-15`} onClick={e => e.stopPropagation()}>
			<div className={modStyle.title}><div>{renderto && <span className="text text_type_main-medium">Детали ингредиента</span>}</div><div className={modStyle.close} onClick={toClose}><CloseIcon type="primary" /></div></div>
			{!renderto && <OrderDetails />}
			{renderto && <IngredientDetails data={info} />}
		</div>
	)
}
Modal.propTypes = {
	renderto: PropTypes.bool,
	toClose: PropTypes.func,
}

export default Modal;