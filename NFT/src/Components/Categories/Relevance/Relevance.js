import React, { useState } from "react";
import "./Relevance.css";
import { Row, Col, List, Menu, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";

const Relevance = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div>
			<div>
				<span>Relevance</span>
				<span style={{ padding: "0px 5px" }}>
					<CaretDownOutlined onClick={(e) => setIsActive(!isActive)} />
				</span>
			</div>
			{isActive && (
				<div className='r-dropdown-content'>
					<div className='r-dropdown-item'>
						<span>
							<Checkbox />
						</span>
						<span>Name A-Z</span>
					</div>
					<div className='r-dropdown-item'>
						<span>
							<Checkbox />
						</span>
						<span>Name Z-A</span>
					</div>
					<div className='r-dropdown-item'>
						<span>
							<Checkbox />
						</span>
						<span>Lowest Price</span>
					</div>
					<div className='r-dropdown-item'>
						<span>
							<Checkbox />
						</span>
						<span>Highest Price</span>
					</div>
					
				</div>
			)}
		</div>
	);
};

export default  Relevance;