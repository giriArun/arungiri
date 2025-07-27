import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';

export default function ResumeCard({ dataObject, children, className = '', triggerOnce = true }) {
    const hasInfo = dataObject && typeof dataObject === 'object' && Object.keys(dataObject).length > 0;
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (triggerOnce && ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [triggerOnce]);

    return (
        hasInfo ? (
            <div ref={ref} className='row gx-0'>
                <div className={`col-lg-6 col-md-12 mb-4 fs-4 fw-bold reveal from-bottom ${visible ? 'show' : ''} ${className}`}>{parse(dataObject.title)}</div>
                <div className="col-lg-6 col-md-12">

                    {children ? ( 
                            children 
                        ) :(
                            <>
                                {dataObject.data && dataObject.data.map((data, idx) => (

                                    <div className="row gx-0" key={idx}>
                                        <div className="col-lg-4 col-md-12">{data.duration}</div>
                                        <div className="col-lg-8 col-md-12 mb-2">

                                            {data.position ? <div className={`fs-5 fw-bold mb-2 me-5 reveal from-right ${visible ? 'show' : ''} ${className}`}>{data.position}</div>:''}
                                            {data.organization ? <div className={`fs-5 fw-bold mb-2 text-second-color reveal ${visible ? 'show' : ''} ${className}`}>{data.organization}</div>:''}
                                            {data.details ? <p className='w-75 lh-sm'>{data.details}</p>:''}
                                            
                                        </div>
                                    </div>

                                ))}

                                {dataObject.skill && dataObject.skill.map((skill, s_index) => (

                                    <div className="row gx-0" key={s_index}>
                                        <div className="col-lg-4 col-md-12"></div>
                                        <div className="col-lg-3 col-md-12 mb-2">
                                            <div className={`fw-5 me-5 reveal from-right ${visible ? 'show' : ''} ${className}`}>{skill.skillName}</div>
                                        </div>
                                        <div className="col-lg-5 col-md-12 mb-3">
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped progress-bar-bg-color" style={{width: `${skill.percentageLevel}%`}} role="progressbar" aria-valuenow={skill.percentageLevel} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </>
                        )
                    }

                </div>
            </div>
        ) : (
            <div className="alert" role="alert">Add your Resume's data object!</div>
        )
    );
};
