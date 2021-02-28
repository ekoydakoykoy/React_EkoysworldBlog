import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import { toggleTheme } from './redux/ducks/ThemeChange';

const Navbar = () => {
    const [ click, setClick] = useState(false);
    const [ button, setButton] = useState(true);

    //redux access variable
    const theme = useSelector(state => state.currentTheme.theme);

    //redux call function
    const dispatch = useDispatch();
    const handleChangeTheme = () => {        
        dispatch(toggleTheme());
    }

    
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
            <nav className={`navbar ${theme ? 'theme-dark' : 'theme-light'}`}>
                <div className="navbar-container">
                    <Link to="/" className={`navbar-logo ${theme ? 'theme-dark' : 'theme-light'}`} onClick={closeMobileMenu}>
                        <i className="fas fa-globe-asia" /> &nbsp; Ekoy's World 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={theme ? 'theme-dark' : 'theme-light'} className={click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <div className={`navbar-theme ${theme ? 'theme-dark' : 'theme-light'}`} onClick={handleChangeTheme}>                        
                            { 
                            theme ?  ( <div className="navbar-theme-select" ><i className="fas fa-moon"></i> </div>) : 
                            ( <div className="navbar-theme-select" > <i className="fas fa-sun"></i>  </div>)
                            }
                                                                               
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       
                        <li className="nav-item">
                            <Link to='/' className={`nav-links ${theme ? 'theme-dark' : 'theme-light'}`} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className={`nav-links ${theme ? 'theme-dark' : 'theme-light'}`} onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about-me' className={`nav-links ${theme ? 'theme-dark' : 'theme-light'}`} onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add-post' className={`nav-links-mobile ${theme ? 'theme-dark' : 'theme-light'}`} onClick={closeMobileMenu}>
                                Add Post
                            </Link>
                        </li>
                    </ul>
                    {button && <Link to='/add-post' className={`btn-mobile ${theme ? 'theme-dark' : 'theme-light'}`}> <Button buttonClass={theme ? 'theme-dark' : 'theme-light'} buttonStyle='btn--outline'> Add Post</Button>
                    </Link>}
                </div>
            </nav>
        </>
    )
}

export default Navbar