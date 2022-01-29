import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	});
	return (
		<div>
			<div className='navbar '>
				<nav className='blue accent-4'>
					<div className='nav-wrapper  container'>
						<a href='#!' className='brand-logo'>
							<em className='nav-brand'>Flipmart</em>
						</a>
						<Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
							<i className='material-icons'>menu</i>
						</Link>
						<ul className='right hide-on-med-and-down'>
							<li>
								<Link to='/cart'>Cart</Link>
							</li>
						</ul>
					</div>
				</nav>

				<ul className='sidenav' id='mobile-demo'>
					<li>
						<Link href='/cart'>Cart</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
