import React from "react";
import "./About.css";
// import Profile from "../../assets//Home/profilephoto.jpg"

const About = () => {
	return (
		<div className='container'>
			<div className='about-heading-box'>
				<h3>About Me</h3>
				<span>Why choose me ?</span>
				{/* <span>.....</span> */}
			</div>

			<div className='row about-box border border-info'>
				<div className='col-4 d-flex flex-column'>
					<img src='https://i.ibb.co/tczCQzS/my-Profile-Pic.jpg' alt='profile' 
						style ={{height:'448px',marginLeft:'-15px',width:'110%'}}
					/>
				</div>
				<div className='col-8 d-flex flex-column py-3 '>
					<div className='para-box'>
						<p className="para-text">
							Full stack web and mobile developer with background knowledge of
							MERN stacks with redux, along with a knack of building
							applications with utmost efficiency. Strong professional with a
							BSC willing to be an asset for an organization.
						</p>
					</div>
					<div className='highlights-box'>
						<h5>Here are a few Highlights</h5>
						<ul>
							<li>Full Stack web and mobile development</li>
							<li>Interactive Front End as per the design</li>
							<li>React and React Native</li>
							<li>Redux for State Mnanagement</li>
							<li>Building REST API</li>
							<li>Managing database</li>
						</ul>
					</div>
					<div className='btn-box'>
						<button className=' btn fbtn'>Hire me</button>
						<button className='btn sbtn '>Get Resume</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

//
{
	/* <div className='about-container'>
<div className='aboutMe-header'>
	<h1 className='about-text'>About Me</h1> */
}
{
	/* <p className='para-text'>Why Choose Me ?</p>
	<div className='heading-seperator'>
		<div className='seperator-line'></div>
		<div className='seperator-blob'>....</div>
	</div>
</div>
<div className='about-box'>
	<div className='profile-img'>
		<img src='https://i.ibb.co/KhLnbjL/profile-Image.jpg' alt='profile' className='' />
	</div>
	<div className='about-des-container'>
		<span className='description'>
			Full stack web and mobile developer with background knowledge of
			MERN stacks with redux, along with a knack of building applications
			with utmost efficiency. Strong professional with a BSC willing to be
			an asset for an organization.
		</span>
		<span>Here are a Few Highlights:</span>
		<span>
			<ul>
				<li>Full Stack Developer</li>
				<li>Full Stack Developer</li>
				<li>Full Stack Developer</li>
				<li>Full Stack Developer</li>
				<li>Full Stack Developer</li>
				<li>Full Stack Developer</li>
			</ul>
		</span>
		<span>
			<button type="button">Hire Me</button>
			<button type="button">Get Resume</button>
		</span>
	</div>
</div>
</div> */
}
