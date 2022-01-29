import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ product }) => {
	return (
		<div className='col s12 l4 m6 center'>
			<div>
				<div className='card card-size center p-5'>
					<img src={product.image} className='img-size' alt='' />
					<div className='card-description'>
						<div className='title'>{product.title.toString().slice(0, 70)}</div>
						<div className='price'>
							<strong>₹ {product.price * 80}</strong>
						</div>
						<Link
							to={`/product/${product.id}`}
							className='waves-effect waves-light btn blue accent-4 m-5'
						>
							View Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
