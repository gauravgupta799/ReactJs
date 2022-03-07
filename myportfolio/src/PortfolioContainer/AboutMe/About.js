import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className='about-container'>
			<div className='aboutMe-header'>
				<h1 className='about-text'>About Me</h1>
				<p className='para-text'>Why Choose Me ?</p>
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
		</div>
	);
};

export default About;
