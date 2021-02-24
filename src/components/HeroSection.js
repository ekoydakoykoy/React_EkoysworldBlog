import React from 'react';
import  { Button }  from './Button';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src='/videos/balloonstk.mp4' autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Link to='/add-post' className='btn-mobile'>
                    <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                </Link>
                <Link to='/add-post' className='btn-mobile'>
                    <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        WATCH TRAILER <i className='fa fa-play-circle' />
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default HeroSection
