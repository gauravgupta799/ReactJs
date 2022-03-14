import React from "react";
import "./Resume.css";

const Resume = () => {
    
	
	return (
		<div className='container border border-warning'>
	<div className='row resume-heading-box'>
				<span id='heading'>Resume</span>
				<span id='subheading'>My Formal Bio Details</span>
				<span id='border'></span>
			</div>
			<div className='row resume-desc-box border border-success'>
				<div className='col-5 icon-box'>
					<div className='icon-bar'>
						<i className='fa fa-home'/>
						<i className='fa fa-search' />
						<i className='fa fa-envelope'/>
						<i className='fa fa-globe'  />
						<i className='fa fa-trash'/>
					</div>
				</div>
				<div className='col-6'>
				 <div className="row" id ="resume">
					<div className='col-3'>
						<li>Dr. A.P.J Abdul Kalam University</li>
					</div>
					<div className='col-3'></div>
					<div className='col-3'></div>
				   

				 </div>
					
				</div>
			</div>
		</div>
	);
};

export default Resume;


