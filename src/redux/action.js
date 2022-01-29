import { SET_PRODUCTS, SET_SINGLE_PRODUCT } from './constants';

export const setProducts = (products) => {
	return {
		type: SET_PRODUCTS,
		payload: products,
	};
};

export const setSingleProduct = (product) => {
	return {
		type: SET_SINGLE_PRODUCT,
		payload: product,
	};
};
