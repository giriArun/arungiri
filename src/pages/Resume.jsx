import parse from 'html-react-parser';
import ResumeData from '../data/Resume.json';

export default function Resume() {
    const resume = ResumeData[0];

    return (
        <div className="row gx-0 resume">
            <div className="col-12 mt-5 mb-4 fs-1 fw-bolder">{resume.pageTitle}</div>

            {resume.types.map((type, index) => (
                <>
                    <div className='col-12 mt-3 mb-4' key={index}>
                        <div className='row gx-0'>
                            <div className="col-lg-6 col-md-12 mb-4 fs-4 fw-bold slide-up">{parse(type.title)}</div>
                            <div className="col-lg-6 col-md-12">
                                {type.data.map((data, idx) => (
                                    <div className="row gx-0" key={idx}>
                                        <div className="col-lg-4 col-md-12">{data.duration}</div>
                                        <div className="col-lg-8 col-md-12 mb-2">
                                            {data.position ? <div className='fs-5 fw-bold mb-2 slide-right'>{data.position}</div>:''}
                                            {data.organization ? <div className='fs-5 fw-bold mb-2 text-second-color'>{data.organization}</div>:''}
                                            {data.details ? <p className='w-75 lh-sm'>{data.details}</p>:''}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}