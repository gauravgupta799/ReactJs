import React from "react";
import "./Skill.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Skills = () => {
	return (
		<div className='container-fluid' id='skill'>
				<h3 id ="text">Skills</h3>
				<span id="bot-brdr"></span>
			<div className='skill-heading-box'>
					<Tabs>
						<TabList className='tablist'>
							<Tab>Frontend</Tab>
							<Tab>Backend</Tab>
							<Tab>Database</Tab>
						</TabList>

						<TabPanel className='tabpanel'>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>Bootstrap</li>
							<li>Reactjs</li>
							<li>SCSS</li>
							<li>Matrial UI</li>
							<li>Semantic UI</li>
							<li>Tailwind CSS</li>
						</ul>
						</TabPanel>
						<TabPanel className='tabpanel'>
							 <ul>
								 <li>NodeJs</li>
								 <li>Express</li>
								 <li>Python</li>
								 <li>C++</li>
								 <li>Java</li>
							 </ul>
						</TabPanel>
						<TabPanel className='tabpanel'>
							<ul>
								<li>MongoDB</li>
								<li>Firebase</li>
								<li>GraphQL</li>
							</ul>
						</TabPanel>
					</Tabs>
				<div className='row'>
				</div>
			</div>
		</div>
	);
};

export default Skills;

// <div className='col-5'>
// <h3>Fontend</h3>
// <div className='card' style={{ width: "18rem" }}>
// 	<ul className='list-group list-group-flush'>
// 		<li className='list-group-item'>HTML</li>
// 		<li className='list-group-item'>CSS</li>
// 		<li className='list-group-item'>JavaScript</li>
// 		<li className='list-group-item'>React</li>
// 	</ul>
// </div>
// </div>

// <div className='col-5'>
// <h3>Backend</h3>
// <div className='card' style={{ width: "18rem" }}>
// 	<ul className='list-group list-group-flush'>
// 		<li className='list-group-item'>NodeJs</li>
// 		<li className='list-group-item'>Python</li>
// 		<li className='list-group-item'></li>
// 	</ul>
// </div>
// </div>
