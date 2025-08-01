import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import imgData from '../images/project_default.jpg';
import Button from './Button';

export default function ProjectCard({ dataObject, children, className = '', triggerOnce = true }) {
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

    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [imageHeight, setImageHeight] = useState(null);
    const [textHeight, setTextHeight] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Measure heights
    useEffect(() => {
        const updateHeights = () => {
            if (imageRef.current && textRef.current) {
                const imgHeight = imageRef.current.offsetHeight;
                const txtHeight = textRef.current.scrollHeight;

                setImageHeight(imgHeight);
                setTextHeight(txtHeight);

                // Show "More" only if text is taller than image
                setShowMore(txtHeight > imgHeight);
            }
        };

        const img = imageRef.current;
        if (img?.complete) {
            updateHeights();
        }
        img?.addEventListener("load", updateHeights);
        window.addEventListener("resize", updateHeights);

        const observer = new ResizeObserver(updateHeights);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => {
            img?.removeEventListener("load", updateHeights);
            window.removeEventListener("resize", updateHeights);
            observer.disconnect();
        };
    }, []);

    return (
        hasInfo ? (
            <div ref={ref} className='row gx-0 project_card'>
                <div className="col-lg-6 col-md-12 mb-3 position-relative" style={{ maxHeight: !expanded && imageHeight ? `${imageHeight}px` : "none", overflow: !expanded ? "hidden" : "visible", transition: "max-height 0.3s ease",}}>
                    <div ref={textRef}>
                        <div className={`mb-1 fs-4 fw-bold me-2 reveal from-right ${visible ? 'show' : ''} ${className}`}>
                            {dataObject.title}
                            {dataObject.subTitle ? <span className='fw-normal'> - {dataObject.subTitle}</span> : ''}
                            {dataObject.link ? <a href={dataObject.link} target='_blank'> LINK </a> : ''}
                        </div>
                        <div className={`fs-5 mb-3 text-second-color reveal from-bottom ${visible ? 'show' : ''} ${className}`}>{dataObject.duration}</div>
                        <div className={`text-second-color reveal from-bottom ${visible ? 'show' : ''} ${className}`}>
                            <div className='mb-3'>{dataObject.description}</div>
                            <div>
                                {dataObject.contributing && dataObject.contributing.length > 0 ? (
                                    <ul>
                                        {dataObject.contributing.map((contribute, idx) => (
                                            <li key={idx}>{contribute}</li>
                                        ))}
                                    </ul>
                                ) : '' }
                            </div>
                            <div>
                                {dataObject.technology && dataObject.technology.map((contribute, idx) => (
                                    <label className='fs-6 fst-italic fw-5 border rounded-3 my-1 me-1 py-1 px-2' key={idx}>{contribute}</label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {showMore && !expanded && (
                        <div className='position-absolute bottom-0 start-0 w-100 text-center p-0 more_option_box'>
                            <Button
                                classes={`rounded-pill me-2 my-2 px-3 fw-5 py-2 shadow-none text-center border my-btn`}
                                text="More"
                                icon=""
                                onClick={() => setExpanded( true )}
                            />
                        </div>
                    )}

                </div>
                <div className="col-lg-2 col-md-0"></div>
                <div className="col-lg-4 col-md-12">
                    <div className={`p-2 project-image-bg reveal from-bottom ${visible ? 'show' : ''} ${className}`}>
                        <img src={dataObject.image ? dataObject.image : imgData } className='w-100 img-grayscale' alt={dataObject.title}/>
                    </div>
                </div>
            </div>
        ) : (
            <div className="alert" role="alert">Add your Project's data object!</div>
        )
    );
};
