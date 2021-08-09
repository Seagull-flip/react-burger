export const GET_DATA = 'GET_DATA';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const ORDER_MODAL_ACTIVE = 'ORDER_MODAL_ACTIVE';
export const INGREDIENTS_MODAL_ACTIVE = 'INGREDIENTS_MODAL_ACTIVE';
export const MODAL_DISACTIVE = 'MODAL_DISACTIVE';
export const SET_DETAIL_INGREDIENTS = 'SET_DETAL_INGREDIENTS';
export const UNSET_DETAIL_INGREDIENTS = 'UNSET_DETAL_INGREDIENTS';
export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';


export function getOrderNumber(ingres) {
	return function (dispatch) {
		dispatch({
			type: GET_ORDER_NUMBER
		});
		fetch('https://norma.nomoreparties.space/api/orders', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 'ingredients': ingres })
		})
			.then((response) => {
				return response.json();
			})
			.then(data => {
				if (data) {
					dispatch({
						type: GET_ORDER_NUMBER_SUCCESS,
						number: data.order.number,
					})
				} else {
					dispatch({
						type: GET_ORDER_NUMBER_FAILED
					})
				}
			})
			.catch(e => {
				dispatch({
					type: GET_ORDER_NUMBER_FAILED
				})
			});
	}
}


export function getBurgerData() {
	return function (dispatch) {
		dispatch({
			type: GET_DATA
		});
		fetch('https://norma.nomoreparties.space/api/ingredients')
			.then((response) => {
				return response.json();
			})
			.then(data => {
				if (data) {
					dispatch({
						type: GET_DATA_SUCCESS,
						data: data.data,
					})
				} else {
					dispatch({
						type: GET_DATA_FAILED
					})
				}
			})
			.catch(err => {
				dispatch({
					type: GET_DATA_FAILED
				})
			})
	}
}