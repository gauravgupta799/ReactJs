import React from "react";
import "./Collection.css";
import { Image, Row, Col } from "antd";
import ProfileImg from "../../images/profile_placeholder.png";

const Collection = () => {
	return (
		<div className='collection-items'>
			<div className='collection-up'>
				<div className='collection-img'>
					<Image width={200} src='' />
				</div>
				<div className='collection-down'>
					<div className='collection-details'>
						<p className='title'>You Are The Technology</p>
						<Row>
							<Col style={{ display: "flex", flexDirection: "column" }}>
								<span id='sub-heading-1'>$ 12k</span>
								<span id='sub-heading-2'>F 12k</span>
							</Col>
							<Col>
								<div className='profileImg-box'>
									<img src={ProfileImg} className='profileImg' alt='' />
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collection;
