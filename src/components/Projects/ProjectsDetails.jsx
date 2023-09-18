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
    <p>{project.description}</p>
  </div>
  </div>
  </>
  )
}

export default ProjectDetails