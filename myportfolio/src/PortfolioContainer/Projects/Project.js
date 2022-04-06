import React from "react";
import "./Project.css";
import ProjectsData from "./data";

const Project = () => {
	return (
		<div className='container' id='projects'>
			​<h1 id='heading'>Projects</h1>
			<div class='grid-container'>
				{ProjectsData.map((project) => {
					const { img, title, link, description, githubLink } = project;
					return (
						<div>
							<img src={img} />
							<p>{title}</p>
							<div className="button-box">
								<button>
									<a href={link}>Project Link</a>
								</button>
								<button>
									<a href={link} >GitHub Link</a>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Project;
