import React from "react";
import "./upperfooter.css";
import { Row, Col } from "antd";
import BookImg from "../../../images/book.png";
import More from "../../../images/more_caret.png";
import Thunder from "../../../images/thunder.png";

const UpperFooter = () => {
	return (
		<div className='upperFooter-container my-5'>
			<Row>
				<Col span={12}>
					<div className='left-column'>
						<div className='img-div'>
							<img src={BookImg} alt='' className='bookImg' />
						</div>
						<div className='doc-box'>
							<h4>Documentation</h4>
							<p>
								Learn more about how to utilize DAAM to manage your <br />{" "}
								digital creations.
							</p>
							<div className="more-box">
								<span>Read More</span>
								<span>
									<img src={More} alt='' className='moreImg' />
								</span>
							</div>
						</div>
					</div>
				</Col>

				<Col span={12}>
					<div className='right-column'>
						<div className='img-div'>
							<img src={Thunder} alt='' className='thunderImg' />
						</div>
						<div className='doc-box'>
							<h4>Get Started</h4>
							<p>
								Get up and running quickly as a Collector or Creator or <br/> Apply to
								become an Agent today. <br />{" "}
							</p>
							<div className="more-box">
								<span className=''>Get Minted Now</span>
								<span>
									<img src={More} alt='' className='moreImg' />
								</span>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default UpperFooter;

{
	/* <Row style={{ border: "1px solid black" }}>
				<Col className='left-column'  span={12}>
					<div className='img-div'>
						<img src={BookImg} alt='' className='' />
					</div>
					<div>
						<h4>Documentation</h4>
						<p>
							Learn more about how to utilize DAAM to manage your <br /> digital
							creations.
						</p>
						<div>
							<span>Read More</span>
							<span>
								<img src={More} alt='' className='' />
							</span>
						</div>
					</div>
				</Col>

				<Col className='right-column'  span={12}>
					<div className='img-div'>
						<img src={BookImg} alt='' className='' />
					</div>
					<div>
						<h4>Documentation</h4>
						<p>
							Learn more about how to utilize DAAM to manage your <br /> digital
							creations.
						</p>
						<div>
							<span>Read More</span>
							<span>
								<img src={More} alt='' className='' />
							</span>
						</div>
					</div>
				</Col>
			</Row> */
}
