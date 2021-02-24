import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

const Navbar = () => {
    const [ click, setClick] = useState(false);
    const [ button, setButton] = useState(true);

    const handleClick = () => setClick(!click); 
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if( window.innerWidth <= 960 ){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    
    useEffect(() => {
        showButton();
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <i className="fas fa-globe-asia" /> &nbsp; Ekoy's World 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add-post' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Add Post
                            </Link>
                        </li>
                    </ul>
                    {button && <Link to='/add-post' className='btn-mobile'> <Button buttonStyle='btn--outline'> Add Post</Button>
                    </Link>}
                </div>
            </nav>
        </>
    )
}

export default Navbar