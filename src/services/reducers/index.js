import {
	GET_DATA,
	GET_DATA_FAILED,
	GET_DATA_SUCCESS,
	ORDER_MODAL_ACTIVE,
	INGREDIENTS_MODAL_ACTIVE,
	MODAL_DISACTIVE,
	SET_DETAIL_INGREDIENTS,
	UNSET_DETAIL_INGREDIENTS,
	GET_ORDER_NUMBER,
	GET_ORDER_NUMBER_SUCCESS,
	GET_ORDER_NUMBER_FAILED,
} from '../actions/index.js'
import { combineReducers } from 'redux';

const initialState = {

	dataLoading: false,
	dataError: false,
	data: [],

	productCount: 0,

	orderData: [],
	totalPrice: 0,



	orderModalActive: false,
	ingredientsModalActive: false,

	detailIngrediens: [],

	orderNumberLoading: false,
	orderNumberError: false,
	orderNumber: 0,

};

export const getOrderData = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDER_NUMBER: {
			return {
				...state,
				orderNumberLoading: true,
				orderNumberError: false,
			};
		}
		case GET_ORDER_NUMBER_SUCCESS: {
			return {
				...state,
				orderNumber: action.number,
				orderNumberLoading: false,
			};
		}
		case GET_ORDER_NUMBER_FAILED: {
			return {
				...state,
				orderNumberLoading: false,
				orderNumberError: true,
			};
		}
		default:
			return state;
	}
}

export const getData = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA: {
			return {
				...state,
				dataLoading: true,
				dataError: false,
			};
		}
		case GET_DATA_SUCCESS: {
			return {
				...state,
				data: action.data,
				dataLoading: false,
			};
		}
		case GET_DATA_FAILED: {
			return {
				...state,
				dataLoading: false,
				dataError: true,
			};
		}
		default:
			return state;
	}
}

export const modalActive = (state = initialState, action) => {
	switch (action.type) {
		case ORDER_MODAL_ACTIVE: {
			return {
				...state,
				orderModalActive: true,
			};
		}
		case INGREDIENTS_MODAL_ACTIVE: {
			return {
				...state,
				ingredientsModalActive: true,
			};
		}
		case MODAL_DISACTIVE: {
			return {
				...state,
				orderModalActive: false,
				ingredientsModalActive: false,
			}
		}
		default:
			return state;
	}
}
export const detailIngredients = (state = initialState, action) => {
	switch (action.type) {
		case SET_DETAIL_INGREDIENTS: {
			return {
				...state,
				detailIngrediens: action.info,
			}
		}
		case UNSET_DETAIL_INGREDIENTS: {
			return {
				...state,
				detailIngrediens: [],
			}
		}
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	bigData: getData,
	modal: modalActive,
	detailIngredients: detailIngredients,
	orderData: getOrderData,
});