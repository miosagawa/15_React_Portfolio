import React from "react"
import ProjectCard from "../../Components/ProjectCard"
import { Jumbotron } from 'reactstrap';
import projects from '../../Info/projects.js';

class Projects extends React.Component {

    state = {
        projects
    };
    

    render() {
        return (
            <Jumbotron className="m-3">
                <h1 className="display-4 text-center pb-5">Projects!</h1>
                {/* <p className="lead text-center">See what I have built!</p> */}
                <hr className="my-4" />
                    {this.state.projects.map(project => (
                        <ProjectCard
                            projectName={project.projectName}
                            exampleGif={project.exampleGif}
                            summary={project.summary}
                            techUsed={project.techUsed}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                        />
                    ))}
            </Jumbotron>
        )
    }
}

export default Projects;