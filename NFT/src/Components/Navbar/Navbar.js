import React, { useState } from "react";
import "./navbarStyle.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import WordedLogo from "../../images/worded_logo.png";
// import { Row, Col, Image, Button } from "antd";
// import Categories from "../Categories/subMenu/Categories"
import Categories from "../Categories/subMenu/Categories";

const Navbar = () => {
	const [isHover, setToggleHover] = useState(false);
	return (
		<Router>
			<nav className='navbar navbar-expand-lg mt-3'>
				<div className='container-fluid py-3'>
					<Link to='/'>
						<img src={WordedLogo} alt='logo' id='logo' />
					</Link>
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
								<Link className='nav-link' aria-current='page' to='/featured'>
									Featured
								</Link>
							</li>
							<Categories />
							<li className='nav-link'></li>
							<li className='nav-item'>
								<Link className='nav-link' to='/about'>
									About
								</Link>
							</li>
						</ul>
						<form className='form-container '>
							<div className='button-container'>
								<button
									className='searchBtn button '
									onMouseEnter={() => setToggleHover(true)}
									onMouseLeave={() => setToggleHover(false)}
								>
									{isHover && (
										<div>
											<input type='text' placeholder='Search' id='search' />
										</div>
									)}
									<i className='fa fa-search' style={{ marginTop: "10px" }}></i>
								</button>
								<Link to='/login'>
									<button className='btn login-btn button'>Login</button>
								</Link>
								<Link to='/create'>
									<button className='btn start-btn button'>Start</button>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</Router>
	);
};

export default Navbar;
