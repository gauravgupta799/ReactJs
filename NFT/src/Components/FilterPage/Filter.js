import React, { useState } from "react";
import "./Filter.css";
import Navbar from "../Navbar/Navbar";
import { Row, Col, Typography, Button, Space, Checkbox, Dropdown } from "antd";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import Collection from "../Collections/Collection";
import Footer from "../Footer/Footer";
import Media from "../../images/media.png";
// import Audio from "../../images/audio.png";
import NFTFilter from "../Categories/NFT_Filter/NftFilter";
import Relevance from "../Categories/Relevance/Relevance";
import audio from "../../images/audio.jpg";
import physical from "../../images/physical.jpg";
import sculpture from "../../images/sculpture.jpg";
import fashion from "../../images/fashion.jpg";
import photography from "../../images/photography.jpg";
import video from "../../images/video.jpg";

const { Title } = Typography;

const Filter = () => {
	const [selected, setSelected] = useState("");
	return (
		<div className='filter-container'>
			<Navbar />
			<Row style={{ marginTop: "12px" }}>
				<Col
					span={8}
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<Title level={3} id='title'>
						126 Pieces
					</Title>
					<div className='button-box'>
						{/* <Space> */}
						<button className='ctrl-button'>
							<span >
								<CloseOutlined />
							</span>
							<span style={{ fontWeight: "bold" }}>Images</span>
						</button>
						<button className='ctrl-button' style={{ marginLeft: "5px" }}>
							<span className='close-btn'>
								<CloseOutlined />
							</span>

							<span style={{ fontWeight: "bold" }}>Video</span>
						</button>
						{/* </Space> */}
					</div>
				</Col>
				<Col span={8} offset={8}>
					<Row style={{ marginTop: "10px" }} gutter={24}>
						<Col>
							<button className='nft-filter-btn'>
								<NFTFilter />
							</button>
						</Col>
						<Col>
							<button className='relevance-btn'>
								<Relevance />
							</button>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row gutter={[16, 16]} style={{ marginTop: "10px" }}>
				<Col span={5} className='filter-col'>
					<Row>
						<Col>
							<div style={{ marginLeft: "10px" }} className='f-filter'>
								<p id='filter-by-digital'>Filter By Digital</p>
								<li className='filter-list-items'>
									<img src={Media} className='media-icon' />
									<span className='list-items'>Digital Art</span>
									<span className='check-box' style={{ marginLeft: "95px" }}>
										<Checkbox />
									</span>
								</li>
								<li className='filter-list-items'>
									<img src={Media} className='media-icon' />
									<span className='list-items'>Video</span>
									<span className='check-box' style={{ marginLeft: "130px" }}>
										<Checkbox />
									</span>
								</li>
								<li className='filter-list-items'>
									<img src={audio} className='media-icon ' />
									<span className='list-items black-text'>Audio</span>
									<span className='check-box' style={{ marginLeft: "129px" }}>
										<Checkbox />
									</span>
								</li>
								<li className='filter-list-items'>
									<img src={photography} className='media-icon black-text' />
									<span className='list-items black-text'>Photography</span>
									<span className='check-box'>
										<Checkbox />
									</span>
								</li>
							</div>
							<hr />
						</Col>

						<Col>
							<div style={{ marginLeft: "10px" }} className='left-filter-box'>
								<p id='filter-by-physical'>Filter By Physical</p>
								<li className='filter-list-items'>
									<img src={physical} className='media-icon' />
									<span className='list-items black-text'>Physical Art</span>
									<span className='check-box'>
										<Checkbox />
									</span>
								</li>
								<li className='filter-list-items'>
									<img src={sculpture} className='media-icon' />
									<span className='list-items black-text'>Sculpture</span>
									<span className='check-box' style={{ marginLeft: "98px" }}>
										<Checkbox />
									</span>
								</li>
								<li className='filter-list-items'>
									<img src={fashion} className='media-icon ' />
									<span className='list-items black-text'>Fashion</span>
									<span className='check-box' style={{ marginLeft: "111px" }}>
										<Checkbox />
									</span>
								</li>
								<li className='filter-list-items'>
									<img src={photography} className='media-icon black-text' />
									<span className='list-items black-text'>Photography</span>
									<span className='check-box' style={{ marginLeft: "75px" }}>
										<Checkbox />
									</span>
								</li>
								<li className='filter-list-items'>
									<img src={video} className='media-icon black-text' />
									<span className='list-items black-text'>Real Estae</span>
									<span className='check-box' style={{ marginLeft: "92px" }}>
										<Checkbox />
									</span>
								</li>
							</div>
						</Col>
					</Row>
				</Col>
				<Col>
					<Row gutter={[16, 16]}>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
					</Row>
					<Row gutter={[16, 16]}>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
						<Col span={8}>
							<Collection />
						</Col>
					</Row>
				</Col>
			</Row>
			<Footer />
		</div>
	);
};

export default Filter;
