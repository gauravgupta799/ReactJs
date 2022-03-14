import React from "react";
import "./Project.css"
import ProjectsData from "./data"

const Project = () => {
	return (
		<div className='container'>
			​<h1 id="heading">Projects</h1>
				<div class='grid-container'>
					{
                        ProjectsData.map(project =>{
                            console.log(project)
                            return (
                                <div>
                                <img src={project.img}/>
                                <p>{project.title}</p>
                               
                              
                                </div>
                            )
                        })
                    }
					
				</div>
		</div>
	);
};

export default Project;
