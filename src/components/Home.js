import React, { useEffect } from 'react';
import SingleCard from './SingleCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../redux/reducers';

const Home = () => {
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllProducts());
	}, []);
	return (
		<div className='center'>
			<div className='home container center'>
				<div className='main-heading'>
					<img
						src='https://lh3.googleusercontent.com/proxy/DTtTBjegnPZV9EqQLiTXpPDWRcO8Byciw-Ik9RP3EHKTnUFmFZr7pu4Nwq1XWsW_Ft4uxfwYG1-2FIWuKfHS6QopzjPhdAKpYJ6kicQ54-rh1YhHMPxPMynR'
						alt=''
						className='latest-products-img-size'
					/>
					<p>
						<em>Featured Products</em>
					</p>
				</div>
				<div className='row center'>
					{products && products.map((product) => <SingleCard product={product} />)}
				</div>
			</div>
		</div>
	);
};

export default Home;
