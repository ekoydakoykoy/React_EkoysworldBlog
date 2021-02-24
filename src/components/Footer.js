import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join to received the latest blog content.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at anytime.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input 
                        type='email' 
                        name='email' 
                        placeholder='Your Email' 
                        className='footer-input' /
                        >
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> About us</h2>
                        <Link to='/'>History</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Terms of Service</Link>                        
                    </div>
                    <div className="footer-link-items">
                        <h2> Contact us</h2>
                        <Link to='/'>Email</Link>
                        <Link to='/'>Phone</Link>
                        <Link to='/'>Address</Link>                        
                    </div>
                    <div className="footer-link-items">
                            <h2> Social Media</h2>
                            <Link to={{ pathname: 'https://www.instagram.com/ekoydakoykoy/'}} target='_blank'>Instagram</Link>
                            <Link to={{ pathname: 'https://www.facebook.com/ekoysworld'}} target='_blank'>Facebook</Link>
                            <Link to={{ pathname: 'https://www.youtube.com/channel/UCB3636G7whMrv8U0jxy19kQ'}} target='_blank'>Youtube</Link>                        
                        </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <i className="fas fa-globe-asia" /> &nbsp; Ekoy's World 
                        </Link>
                    </div>
                    <small className="website-rights"> &nbsp; &nbsp; &nbsp;Ekoy's World © 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" 
                            to={{ pathname:"https://www.facebook.com/ekoysworld"}}
                            target='_blank'
                            aria-label='Facebook'
                        > 
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" 
                            to={{ pathname:"https://www.instagram.com/ekoydakoykoy/"}}
                            target='_blank'
                            aria-label='Instagram'
                        > 
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube" 
                            to={{ pathname: "https://www.youtube.com/channel/UCB3636G7whMrv8U0jxy19kQ"}}
                            target='_blank'
                            aria-label='Youtube'
                        > 
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
