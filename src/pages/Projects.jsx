import { useEffect } from 'react';
import ProjectData from '../data/Projects.json';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const project = ProjectData[0];

    useEffect(() => {
        document.title = project.pageTitle;
    }, []);

    return (
        <div className="row gx-0 project">
            <div className="col-12 mt-5 mb-4 fs-1 fw-bolder">{project.pageTitle}</div>

            {project.projectList.map((data, index) => (
                <div className='col-12 mt-3 mb-4' key={index}>
                    <ProjectCard dataObject={data}/>
                </div>
            ))}
        </div>
    );
}