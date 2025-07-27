import footerData from '../data/Footer.json';

export default function Footer() {
    return (
        <footer className="pt-5 pb-4">
            <div className="container-fluid text-md-left px-0">
                <div className="row text-md-left g-0">
                    <div className='col-12'>
                        <hr/>
                    </div>

                    {footerData.map((section, index) => (
                        <div className='col-md-6 col-lg-3 col-xl-3 px-0' key={index}>
                            <div className='px-5 py-3 d-flex justify-content-md-start justify-content-center text-md-start text-center'>
                                <div>
                                    {section.title && <div className='fs-4 fw-bold mb-2'>{section.title}</div>}
                                    {section.info.map((item, idx) => (
                                        typeof item === "string" ? (
                                            <div className='my-1' key={idx}>
                                                {section.isLink && ( section.isLink === "p" || section.isLink === "e" ) ? (
                                                    <a href={ section.isLink === "p" ? ( `tel:${item}` ) : ( `mailto:${item}` )} className='text-decoration-none text-color' key={idx}>{item}</a>
                                                ) : ( 
                                                    item
                                                )} 
                                            </div> 
                                        ) : (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" key={idx}>
                                            {item.icon}
                                            </a>
                                        )
                                       
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </footer>
    );
}
