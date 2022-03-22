import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { Row, Col } from "antd";
import Creator from "../../images/creator.png";

const Header = () => {
	return (
		<div className='header'>
			<Navbar />
			<Row>
				<div className='creator-box'>
					<button style={{width:"90px"}}>
						<img
							src={Creator}
							alt=''
							className='creator-img'
						/>					
						Creator
					</button>
				</div>
			</Row>
			<Row className='creator-detail'>
				<Col className='creator-1'>
					<h3>Creator Name</h3>
					<button style={{}}>View Presentation</button>
				</Col>
				<Col>
					<Row
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Col className='about-container'>
							<div className='about-box'>
								<h4>About</h4>
								<p>
									Lorem ip Lorem ipsum dolor sit amet, vel accumsan liberavisse
									ex, ea nec elaboraret interpretaris, sed diceret
									concludaturque no. Verear habemus sea ut. His nibh scripta in.
									In sea vocibus facilisis. Sed ea cibo eripuit vituperata, pri
									eius debitis ne. Eos et wisi legimus, vel cu paulo doctus
									vidisse. Iudico dicant nostrum nec an, in eos harum vitae, te
									quod vero salutandi nam. In detraxit eleifend duo, alterum
									iudicabit consectetuer per ad. Qui case possit omittam an,
									everti expetenda ut usu. Pro discere graecis liberavisse in.
									Ne docendi corpora quaestio eum, has vivendo suavitate
									accommodare an. Mei commune detraxit intellegebat ea, duo
									malis mundi abhorreant ei, cu mentitum recusabo elaboraret
									eos. Debitis temporibus sit an, eam at alterum efficiantur
									philosophia. Sea laoreet contentiones id, inermis partiendo
									vix ut, sea no graeco forensibus posidonium. Id pri error
									simul, ius illud falli meliore eu. Invenire forensibus est cu,
									diam ocurreret eu nam. Ne cum iriure accumsan oportere, laudem
									mandamus no duo.
								</p>
							</div>
						</Col>
						<br />
						<br />

						<Col className='about-container'>
							<div className='follower-div'>
								<span>Followed By:</span>
								<Row className='follower-list'>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
									<Col sm={6} xs={6} xl={6} lg={6} className='follower'></Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
			
		</div>
	);
};

export default Header;
