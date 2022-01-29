import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productsReducer, singleProductsReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
	allProducts: productsReducer,
	singleProduct: singleProductsReducer,
});

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
