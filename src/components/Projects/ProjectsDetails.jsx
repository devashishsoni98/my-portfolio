// import React from "react";
// import { useParams } from "react-router-dom";
// import projectData from "./projectData";
// import GoBack from "../Props/GoBack";

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projectData.find((item) => item.id === parseInt(id));

//   if (!project) {
//     return <div>Project not found</div>;
//   }
//   return (
//     <>
//       <div className="project-details">
//         <div className="project-details-div pos-rel">
//           <GoBack />
//           <h1>{project.title}</h1>
//           <h2>{project.description}</h2>
//           <img
//             className="pd-img"
//             src={project.image}
//             alt={`${project.title}-img`}
//           />
//           {project.technologies.length > 0 && (
//             <div className="tech">
//               <div className="technology">
//                 <p className="techno">Technology:</p>
//                 <ul className="names">
//                 {project.technologies.map((tech, index) => (
//                     <li key={index}>{tech}</li>
//                   ))}
//                 </ul>
//               </div>
//               <p className="frame">
//                 Time Frame: <br /> <p className="time">{project.timeframe}</p>
//               </p>
//             </div>
//           )}
//           <span className="def-col">Context :</span>
//           <h3>{project.context}</h3>
//           <span className="def-col">Description :</span>
//           <p>{project.details}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectDetails;

"use client"
import { useParams } from "react-router-dom"
import projectData from "./projectData"
import GoBack from "../Props/GoBack"
import LazyImage from "../ImageOptimizer/LazyImage"
import ImagePreloader from "../ImageOptimizer/ImagePreloader"

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projectData.find((item) => item.id === Number.parseInt(id))

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="glass-card">
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <GoBack />
        </div>
      </div>
    )
  }

  return (
    <div className="project-details-container">
      <div className="project-details-content">
        <div className="project-header">
          <GoBack />
          <div className="project-title-section">
            <h1 className="project-main-title">{project.title}</h1>
            <h2 className="project-subtitle">{project.description}</h2>
          </div>
        </div>

        <div className="project-image-section">
          <div className="project-image-container">
            <LazyImage
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} project showcase`}
              className="project-main-image"
              priority={true}
            />
          </div>
        </div>

        {project.technologies.length > 0 && (
          <div className="project-meta-section">
            <div className="tech-section glass-card">
              <div className="tech-content">
                <h3 className="section-label">Technologies Used</h3>
                <ul className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="timeframe-section glass-card">
              <h3 className="section-label">Development Timeline</h3>
              <p className="timeframe-value">{project.timeframe}</p>
            </div>
          </div>
        )}

        <div className="project-context-section">
          <div className="content-block glass-card">
            <h3 className="section-title">Project Context</h3>
            <p className="context-text">{project.context}</p>
          </div>
        </div>

        <div className="project-description-section">
          <div className="content-block glass-card">
            <h3 className="section-title">Project Details</h3>
            <div className="description-text">{project.details}</div>
          </div>
        </div>
      </div>
      
      <ImagePreloader 
        images={[project.image]} 
        priority={true} 
      />
    </div>
  )
}

export default ProjectDetails
