import React from "react";
import "./BFooter.css";
import { Row, Col } from "antd";

const BottomFooter = () => {
	return (
		<div className='footer-container'>
			<Row className='footer-container-row' span={8}>
				<Col>
					<p id='copyright'>© Copyright 2020 DAAM Corporation.</p>
				</Col>
				<Col span={8} offset={6}>
					<div className='terms-privacy-box'>
						<span id='privacy-text'>Privacy Policy</span>
						<span id='terms-text'>Terms of Service</span>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default BottomFooter;
