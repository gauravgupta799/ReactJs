import React from "react";
import "./Skill.css";

const Skills = () => {
	return (
		<div className='container'>
			<div className='skill-heading-box'>
				<h3>Skills</h3>
				<div className='row'>
						<div className='col-5'>
							<h3>Fontend</h3>
							<div className='card' style={{ width: "18rem" }}>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item'>HTML</li>
									<li className='list-group-item'>CSS</li>
									<li className='list-group-item'>JavaScript</li>
									<li className='list-group-item'>React</li>
								</ul>
							</div>
						</div>
                      
						<div className='col-5'>
							<h3>Backend</h3>
							<div className='card' style={{ width: "18rem" }}>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item'>NodeJs</li>
									<li className='list-group-item'>Python</li>
									<li className='list-group-item'></li>
								</ul>
							</div>
						</div>
					</div>
			</div>
		</div>
	);
};

export default Skills;
