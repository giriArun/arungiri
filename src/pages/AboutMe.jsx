import AboutMeRightCard from '../components/AboutMeRightCard';
import AboutMeData from '../data/AboutMe.json';
import ProfileImage from '../images/profile_image.jpg';

export default function AboutMe() {
    const aboutData = AboutMeData[0];
    
    return (
        <div className="row about-me">
            <div className="col-lg-6 col-md-12 px-0 d-lg-none d-inline-block d-flex flex-column align-items-center flex-lg-row">
                <AboutMeRightCard
                    dataObject = {aboutData}
                    parentClass = ''
                    buttonClass = 'my-2'
                />
            </div>
            <div className="col-lg-6 col-md-12 px-0 d-flex flex-column align-items-center flex-lg-row-reverse">
                <div className="m-5 profile-image about-box-margin">
                    <div className="rounded-circle p-2 profile-image-bg">
                        {/* <img src={aboutData.profileImage} className="rounded-circle img-fluid w-100 h-100 img-grayscale" alt={aboutData.profileImageName}></img> */}
                        <img src={ProfileImage} className="rounded-circle img-fluid w-100 h-100 img-grayscale" alt={aboutData.profileImageName}></img>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 px-0 d-none d-lg-inline-block d-flex flex-column align-items-center flex-lg-row">
                <AboutMeRightCard
                    dataObject = {aboutData}
                    parentClass = 'about-box-margin'
                />
            </div>
        </div>
    );
}