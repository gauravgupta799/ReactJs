import React from "react";
import "./creator.css";
import Header from "../Header/Header";
import Collection from "../Collections/Collection";
import { Row, Col } from "antd";
import Footer from "../Footer/Footer";


const Creator = () => {
	return (
		<div className='container'>
			<Header />
			<div className='collection-cotainer'>
				<div className='collection-upper'>
					<div className='title-box'>
						<span className='title-1'>Latest</span>
						<span>
							<img src='' alt='' />
						</span>
					</div>
					<Row className='list-collection'>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
					</Row>
				</div>
				<div className='collection'>
					<span className='title-2'>Featured Collections</span>
					<Row className='list-collection'>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
						<Col xs={24} sm={12} md={8} lg={6} xl={6}>
							<Collection></Collection>
						</Col>
					</Row>
				</div>
			</div>
			<div>
				<Footer/>
			</div>
		</div>
	);
};

export default Creator;
