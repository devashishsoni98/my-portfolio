import React from 'react'
import { useParams } from 'react-router-dom'
import projectData from './projectData'

const ProjectDetails = () => {
    const { id } = useParams();
  const project = projectData.find((item) => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <>
    <div className="project-details">
    <div className='project-details-div'>
    <h1>{project.title}</h1>
    <h2>{project.description}</h2>
    <img className='pd-img' src={project.image} alt={`${project.title}-img`} />
    <span className='def-col'>Context :</span>
    <h3>{project.context}</h3>
    <span className='def-col'>Description :</span>
    <p>{project.details}</p>
  </div>
  </div>
  </>
  )
}

export default ProjectDetails