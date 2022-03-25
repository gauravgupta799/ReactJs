import React, { useState } from "react";
import "./nftStyle.css";
import {  Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";

const NftFilter = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div>
			<div>
				<span>NFT Filter</span>
				<span style={{ padding: "0px 5px" }}>
					<CaretDownOutlined onClick={(e) => setIsActive(!isActive)} />
				</span>
			</div>
			{isActive && (
				<div className='dropdown-content'>
					<div className='dropdown-item'>
						{/* <span>
							<Checkbox />
						</span> */}
                        <input type="checkbox"/>
						<span>NFT Request</span>
					</div>
					<div className='dropdown-item'>
						{/* <span>
							<Checkbox />
						</span> */}
                        <input type="checkbox"/>
						<span>For Sale</span>
					</div>
					<div className='dropdown-item'>
						{/* <span>
							<Checkbox />
						</span> */}
                        <input type="checkbox"/>
						<span>Minting</span>
					</div>
					<div className='dropdown-item'>
						{/* <span>
							<Checkbox />
						</span> */}
                        <input type="checkbox"/>
						<span>Sold</span>
					</div>
					<div className='dropdown-item'>
						{/* <span>
							<Checkbox />
						</span> */}
                        <input type="checkbox"/>
						<span>List Pending</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default NftFilter;

// {options.map((item) =>{
//     console.log(item);
//     <div className='dropdown-item'>
//         <span>
//             <Checkbox />
//         </span>
//         <span>{item}</span>
//     </div>

// })}
