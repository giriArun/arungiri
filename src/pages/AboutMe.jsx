import React from 'react'
import Button from '../components/Button';
import AboutMeData from '../data/AboutMe.json';

export default function AboutMe() {
    const aboutData = AboutMeData[0];
    
    return (
        <div className="row about-me">
            <div className="col-lg-6 col-md-12 px-0 d-lg-none d-inline-block d-flex flex-column align-items-center flex-lg-row">
                <div className="m-5">
                    <div className='title-size mb-4'>{aboutData.title}</div>
                    <div className='sub-title-size mb-2 slide-right'>{aboutData.subTitle}</div>
                    <p className='w-75 lh-sm slide-left'>{aboutData.description}</p>
                    <div>
                        {aboutData.button.map((button, index) => (
                            <Button
                                classes='slide-up rounded-circle me-2 my-2 shadow-none text-center about-button'
                                text={button.name}
                                icon=""
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 px-0 d-flex flex-column align-items-center flex-lg-row-reverse">
                <div className="m-5 profile-image about-box-margin">
                    <div className="rounded-circle p-2 profile-image-bg">
                        <img src={aboutData.profileImage} className="rounded-circle img-fluid w-100 h-100 img-grayscale" alt={aboutData.profileImageName}></img>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 px-0 d-none d-lg-inline-block d-flex flex-column align-items-center flex-lg-row">
                <div className="m-5 about-box-margin">
                    <div className='title-size mb-4'>{aboutData.title}</div>
                    <div className='sub-title-size mb-2 slide-right'>{aboutData.subTitle}</div>
                    <p className='w-75 lh-sm slide-left'>{aboutData.description}</p>
                    <div>
                        {aboutData.button.map((button, index) => (
                            <Button
                                classes='slide-up rounded-circle me-2 shadow-none text-center about-button'
                                text={button.name}
                                icon=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}