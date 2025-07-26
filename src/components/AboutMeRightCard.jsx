import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function ResumeCard({ dataObject, parentClass, buttonClass, triggerOnce = true }) {
    const hasInfo = dataObject && typeof dataObject === 'object' && Object.keys(dataObject).length > 0;
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const className = '';

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

    const navigate = useNavigate();

    function redirectURL( link ){
        navigate( link );
    }

    return (
        hasInfo ? (
            <div ref={ref} className={`m-5 ${parentClass}`}>
                <div className='title-size mb-4'>{dataObject.title}</div>
                <div className={`sub-title-size mb-2 reveal from-right ${visible ? 'show' : ''} ${className}`}>{dataObject.subTitle}</div>
                <p className='w-75 lh-sm slide-left'>{dataObject.description}</p>
                <div className={`reveal from-bottom ${visible ? 'show' : ''} ${className}`}>
                    {dataObject.button.map((button, index) => (
                        <Button
                            key={index}
                            classes={`slide-up rounded-circle me-2 my-2 shadow-none text-center about-button ${buttonClass}`}
                            text={button.name}
                            icon=""
                            onClick={() => redirectURL( button.link )}
                        />
                    ))}
                </div>
            </div>
        ) : (
            <div className="alert" role="alert">Add your's data object!</div>
        )
    );
};
