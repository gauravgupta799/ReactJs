import React from "react";
import "./navbarStyle.css";
// import { Row, Col, Image, Button } from "antd";

const Navbar = () => {
	return (
		// <div className="container-fluid mt-3">
		<nav className='navbar navbar-expand-lg mt-3'>
			<div className='container-fluid py-3'>
				<img
					src='https://i.ibb.co/SvvXsVL/worded-logo.png'
					alt='logo'
					id='logo'
				/>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo02'
					aria-controls='navbarTogglerDemo02'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#'>
								Featured
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Categories
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								About
							</a>
						</li>
					</ul>
					<form className='form-container '>
						<div className='button-container'>
							<button className='searchBtn button '>
								<i className='fa fa-search'></i>
							</button>
							<button className='btn login-btn button'>Login</button>
							<button className='btn start-btn button'>Start</button>
						</div>
					</form>
				</div>
			</div>
		</nav>
		// </div>
	);
};

export default Navbar;
