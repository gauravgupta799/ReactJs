import React, { useState } from "react";
import "./CategoriesStyle.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import media from "../../../images/media.png";
import physicalArt from "../../../images/physical.jpg";
import Sculpture from "../../../images/sculpture.jpg";
import audio from "../../../images/audio.jpg";
import video from "../../../images/video.jpg";
import photography from "../../../images/photography.jpg";
import fashion from "../../../images/fashion.jpg";
import digital from "../../../images/digital.jpg";


const Categories = () => {
	const [isHover, setToggleHover] = useState(false);

	return (
		<div
			onMouseEnter={() => setToggleHover(true)}
			onMouseLeave={() => setToggleHover(false)}
		>
			<li id='categories-text'>Categories</li>
			{isHover && (
				<div className='categories-list-box'>
					<Row gutter={100}>
						<Col style ={{marginTop: '10px'}} className='categories-list'>
							<span className='upper-heading'>Digital</span>
							<Link>
								<li>
									<img src={digital}></img>
									<span>Digital Art</span>
								</li>
							</Link>
							<Link>
								<li>
									<img src={audio}></img>
									<span>Audio</span>
								</li>
							</Link>
							<Link>
								<li>
									<img src={video}/>
									<span>Video</span>
								</li>
							</Link>
							<Link>
								<li>
									<img src={ photography }></img>
									<span>Photography</span>
								</li>
							</Link>
						</Col>
						<div id="vertical-line"></div>
						<Col style ={{marginTop: '10px'}}>
							<span className='upper-heading'>Physical</span>
							<Link to ="/">
								<li>
									<img src={physicalArt}></img>
									<span>Physical Art</span>
								</li>
							</Link>
							<Link>
								<li>
									<img src={Sculpture }></img>
									<span>Sculpture</span>
								</li>
							</Link>
							<Link>
								<li>
									<img src={fashion }></img>
									<span>fashion</span>
								</li>
							</Link>
							<Link>
								<li>
									<img src={fashion }></img>
									<span>Real-Estate</span>
								</li>
							</Link>
						</Col>
					</Row>
				</div>
			)}
		</div>
	);
};

export default Categories;

{
	/* <Row>
					<Col className='gutter-row' span={12}>
						<div >
							<p>Digital Art</p>
							<ul>
								<li>Digital Art</li>
								<li>Video</li>
								<li>Audio</li>
								<li>Photography</li>
							</ul>
						</div>
					</Col>
					<Col className='gutter-row' span={12}>
						<div>
							<p>Digital Art</p>
							<ul>
								<li>Digital Art</li>
								<li>Video</li>
								<li>Audio</li>
								<li>Photography</li>
							</ul>
						</div>
					</Col>
				</Row> */
}
