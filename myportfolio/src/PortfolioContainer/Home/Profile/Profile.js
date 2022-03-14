import React from "react";
import "./Profile.css";
// import Navbar from "../Navbar/Navbar"
// import Typical from 'react-typical';

const Profile = () => {
	return (
		<>
         {/* <Navbar/> */}
		<div className='profile-container'>
			<div className='profile-parent'>
				<div className='profile-details'>
					<div className='colz'>
						<div className='colz-icon'>
							<a href='' target='_blank'>
								<i className='fa fa-facebook-square' />
							</a>
							<a href='https://www.linkedin.com/in/gauravgupta88/' target='blank'>
								<i className='fa fa-linkedin-square' />
							</a>
							<a href='' target='blank'>
								<i className='fa fa-instagram' />
							</a>
							<a href='' target='blank'>
								<i className='fa fa-youtube-square' />
							</a>
							<a href='' target='blank'>
								<i className='fa fa-twitter-square' />
							</a>
							<a href='https://github.com/gauravgupta799' target='blank'>
								<i className='fa fa-github-square' />
							</a>
						</div>
					</div>

					<div className='profile-details-name'>
						<span className='primary-text'>
							{" "}
							Hello, I'm<span className='highlighted-text'>Gaurav</span>
						</span>
					</div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                {/* {" "}
				<Typical 
					steps = {[
						"Enthusiastic Dev 🔋 ", 1000,
						"Full Stack Developer 💻", 1000,
						"MERN Stack Developer 🔌", 1000,
						"React/React Native Dev 📱", 1000,
						"Youtuber", 1000,
						"Photographer 📸"
					]}
					loop={Infinity}
				/> */}
              </h1>
			  <span className= "profile-role-tagline">
				  Knack of building with front 
				  and backned operations.
			  </span>
            </span>
          </div>
		  <div className='profile-options'>
			  <button className='btn primary-btn'>
				  {" "}
				  Hire Me !
			  </button>
			    <a href= " resume.pdf" download = "gaurav resume.pdf">
					<button className='btn highlighted-btn mx-3'>Get Resume</button>
			    </a>
		  </div>
		</div>
		<div className='profile-picture'>
			<div className='profile-picture-background'>

			</div>
		</div>
		</div>
	</div>
		</>
		
	);
};

export default Profile;
