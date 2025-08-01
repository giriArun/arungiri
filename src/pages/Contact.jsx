import { useEffect } from 'react';
import ContactData from '../data/Contact.json';

export default function Home() {
    const contact = ContactData[0];

    useEffect(() => {
        document.title = contact.pageTitle;
    }, []);

    return (
        <div className="row gx-0 contact">
            <div className="col-12 mt-5 mb-4">
                <div className='fs-1 fw-bolder'>{contact.pageTitle}</div>
                <div className='mt-3'>{contact.pageSubTitle}</div>
            </div>
            <div className='col-md-6 col-sm-12'>
                {contact.footerInfo
                    .filter((data) => ['phone', 'email'].includes(data.title.toLowerCase()))
                    .map((data, index) => (
                    
                        <div className='my-4' key={index}>
                            <div className='fs-4 my-2'>{data.title}</div>
                            {data.info.map((item, idx) => (
                                typeof item === "string" ? (
                                    <div className='my-1' key={idx}>
                                        {data.isLink && ( data.isLink === "p" || data.isLink === "e" ) ? (
                                            <a href={ data.isLink === "p" ? ( `tel:${item}` ) : ( `mailto:${item}` )} className='text-decoration-none text-color' key={idx}>{item}</a>
                                        ) : ( 
                                            item
                                        )} 
                                    </div> 
                                ) : ''
                                
                            ))}
                        </div>
                    
                    )
                )}
            </div>
            <div className='col-md-6 col-sm-12'>
                <div className='my-4'>
                    <div className='fs-4 my-2'>{contact.addrssInfo[0].title}</div>
                    <div className='my-1'>{contact.addrssInfo[0].city}</div>
                    <div className='my-1'>{contact.addrssInfo[0].district}</div>
                    <div className='my-1'>{contact.addrssInfo[0].state} ({contact.addrssInfo[0].pin}) {contact.addrssInfo[0].country}</div>
                </div>
            </div>
        </div>
    );
}