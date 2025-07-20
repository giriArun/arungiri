import React from 'react'
//import DemoImage from '../images/two-dog.jpg';
import aboutMeData from '../data/aboutMe.json';

export default function AboutMe() {
    const aboutData = aboutMeData[0];
    
    return (
        <div className="row about-me">
            <div className="col-lg-6 col-md-12 px-0 d-lg-none d-inline-block d-flex flex-column align-items-center flex-lg-row bg-secondary">
                <div className="m-5">
                    <h1>Hello</h1>
                    <h3>A Bit About Me</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <div>
                        <button>Click 1</button>
                        <button>Click 2</button>
                        <button>Click 3</button>
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
                    <div className='sub-title-size mb-2'>{aboutData.subTitle}</div>
                    <p className='w-75 fw-light lh-sm'>{aboutData.description}</p>
                    <div>
                        <button>Click 1</button>
                        <button>Click 2</button>
                        <button>Click 3</button>
                    </div>
                </div>
            </div>
        </div>
    );
}