import React from "react";
import "./Midfooter.css";
import { Row, Col, Image, Input, Button } from "antd";
import WordLogo from "../../../images/worded_logo.png";

const MidFooter = () => {
	return (
		<div className='mid-footer-container'>
			<Row className='row-div'>
				<Col span={6} xs={24} sm={24} lg={6} xl={6} className='footer-div'>
					<ul>
						<li className='list-style'>
							<img src={WordLogo} alt='logoImag' className='logo' />
							<p>
								MIT License your project <br /> Lorem ipsum dolor sit amet,{" "}
								<br />
								consetetur sadipscin
							</p>
							<a
								href='#'
								style={{ color: "#FF4040" }}
								className='fa fa-instagram'
							></a>
							<a
								href='#'
								style={{ color: "#FF4040" }}
								className='fa fa-facebook'
							></a>
							<a
								href='#'
								style={{ color: "#FF4040" }}
								className='fa fa-twitter'
							></a>
							<a
								href='#'
								style={{ color: "#FF4040" }}
								className='fa fa-youtube'
							></a>
						</li>
					</ul>
				</Col>
				<Col span={12} lg={10} xl={10} sm={24} xs={24}>
					<Row>
						<Col xs={8} sm={8} lg={8} xl={8} className='footer-div'>
							<ul className='footer-link'>
								<li className='list-header'>
									<a>MARKETPLACE</a>
								</li>
								<li className='list-style'>
									<a>Featured</a>
								</li>
								<li className='list-style'>
									<a>Flowscan Activity</a>
								</li>
								<li className='list-style'>
									<a>Storms</a>
								</li>
								<li className='list-style'>
									<a>Login/Register</a>
								</li>
							</ul>
						</Col>
						<Col xs={8} sm={8} lg={8} xl={8} className='footer-div'>
							<ul className='footer-link'>
								<li className='list-header'>
									<a>COMPANY</a>
								</li>
								<li className='list-style'>
									<a>Team</a>
								</li>
								<li className='list-style'>
									<a>Agents</a>
								</li>
								<li className='list-style'>
									<a>Eco-Pledge</a>
								</li>
								<li className='list-style'>
									<a>Blog</a>
								</li>
							</ul>
						</Col>
						<Col xs={8} sm={8} lg={8} xl={8} className='footer-div'>
							<ul className='footer-link'>
								<li className='list-header'>
									<a>RESOURCES</a>
								</li>
								<li className='list-style'>
									<a>Flowscan</a>
								</li>
								<li className='list-style'>
									<a>Filecoin</a>
								</li>
								<li className='list-style'>
									<a>Blocto</a>
								</li>
								<li className='list-style'>
									<a>Whitepapers</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Col>
				<Col
					span={6}
					xs={24}
					sm={24}
					lg={8}
					xl={8}
					className='footer-div'
					style={{ paddingLeft: "5px" }}
				>
					<ul className='footer-link'>
						<li className='list-header'>
							<a>SUBSCRIBE</a>
						</li>
						<li className='list-style'>
							<a>Get community events, news and free tutorials.</a>
						</li>
						<div className='row' style={{ marginTop: "10px" }}>
							<div className='col-7 input-icons'>
							<i className="fa fa-envelope" id="email-icon" aria-hidden="true"></i>
									<input
										type='email'
										id='inputEmail'
										className='form-control'
										placeholder='Email'									
									/>
													
													 
							</div>
							<div className='col-5'>
								<button className='btn btn-danger signup-btn'>Sign up</button>
							</div>
						</div>
					</ul>
				</Col>
			</Row>
		</div>
	);
};

export default MidFooter;
