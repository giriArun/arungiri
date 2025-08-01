import { NavLink } from 'react-router-dom';

import TypeText from './TypingText';
import HaderText from '../data/Header.json';

function Navbar() {
    const hederData = HaderText[0];

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <TypeText
                        firstText = {hederData.firstText}
                        secondTextArray = {hederData.secondText}
                    />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://www.wix.com/website-template/view/html/2846?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button&esi=9a2333c6-1d4b-4877-a434-f3fc70863a1f">Suggest Website</a></li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
