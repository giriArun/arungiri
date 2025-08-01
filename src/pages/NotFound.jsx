import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Page not found';
    }, []);

    function redirectURL( link ){
        navigate( link );
    }
    
    return (
        <div className="">
            <div className="d-flex align-items-center justify-content-center mt-5 px-2">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-2 fw-medium mt-4">Oops! Page not found</p>
                    <p className="mt-4 mb-5">The page you're looking for doesn't exist or has been moved.</p>
                    <Button
                        classes="rounded-pill p-2 border shadow-none text-center goHome"
                        text="Go Home"
                        onClick={() => redirectURL( "/" )}
                    />
                </div>
            </div>
        </div>
    );
}
