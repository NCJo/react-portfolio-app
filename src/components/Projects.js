import React from 'react';
import PROJECTS from '../data/projects';

// before refractor to stateless component
// class Project extends Component {
const Project = props => {
    const { title, image, description, link } = props.project;
    return (
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 120 }}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )

}


const Projects = () => (
    <div>
        <h2 style={{ color: '#2374ab' }}>Highlighted Projects</h2>
        {/* <h6>(Check out my React and Redux fun projects on the top links!)</h6> */}
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT}/>
                ))
            }
        </div>
    </div>
)

export default Projects;