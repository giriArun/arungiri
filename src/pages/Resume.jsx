import { useEffect } from 'react';
import ResumeData from '../data/Resume.json';
import ResumeCard from '../components/ResumeCard';

export default function Resume() {
    const resume = ResumeData[0];

    useEffect(() => {
        document.title = resume.pageTitle;
    }, []);

    return (
        <div className="row gx-0 resume">
            <div className="col-12 mt-5 mb-4 fs-1 fw-bolder">{resume.pageTitle}</div>

            {resume.types.map((type, index) => (
                <div className='col-12 mt-3 mb-4' key={index}>
                    <ResumeCard dataObject={type}/>
                </div>
            ))}
        </div>
    );
}