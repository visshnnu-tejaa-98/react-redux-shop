import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleProducts } from '../redux/reducers';

const SingleProduct = () => {
	let id = useParams().id;
	console.log(id);
	const productDetails = useSelector((state) => state.singleProduct.product);
	console.log(productDetails);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSingleProducts(id));
	}, []);
	return (
		<div>
			<div className='row container'>
				<div className='col s12 l6  mt-5'>
					<img src={productDetails.image} className='single-product-image' alt='' />
				</div>
				<div className='col s12 l6 mt-5'>
					<h4>{productDetails.title}</h4>
					<p className='label'>{productDetails.category}</p>
					<p>{productDetails.description}</p>
					<p className='single-product-price'>₹ {productDetails.price * 80}</p>
					<a className='waves-effect waves-light btn btn-large blue accent-4'>
						<i className='material-icons right'>add_shopping_cart</i>Add to Cart
					</a>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;

// add_shopping_cart
