import "./Navbar.css";
// import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg'>

				<a className='navbar-brand' href="#">
					Portfolio
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<a className='nav-link nav-link' href="#">
								Home <span className='sr-only'></span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link'  href="#about">
								About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link'  href="#">
								Skills
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link ' href="#">
								Projects
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href="#">
						       Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
