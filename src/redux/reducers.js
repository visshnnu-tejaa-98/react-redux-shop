import { setProducts, setSingleProduct } from './action';
import { SET_PRODUCTS, SET_SINGLE_PRODUCT } from './constants';

const initialProductsState = {
	loading: false,
	products: [],
};
export const productsReducer = (state = initialProductsState, action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};

export const getAllProducts = () => {
	return async (dispatch) => {
		try {
			const req = await fetch(`https://fakestoreapi.com/products/`);
			const res = await req.json();
			console.log(res);
			dispatch(setProducts(res));
		} catch (error) {
			console.log(error);
		}
	};
};

const initialSingleProductsState = {
	loading: false,
	product: {},
};
export const singleProductsReducer = (state = initialSingleProductsState, action) => {
	switch (action.type) {
		case SET_SINGLE_PRODUCT:
			return {
				...state,
				product: action.payload,
			};
		default:
			return state;
	}
};

export const getSingleProducts = (id) => {
	return async (dispatch) => {
		try {
			const req = await fetch(`https://fakestoreapi.com/products/${id}`);
			const res = await req.json();
			console.log(res);
			dispatch(setSingleProduct(res));
		} catch (error) {
			console.log(error);
		}
	};
};
