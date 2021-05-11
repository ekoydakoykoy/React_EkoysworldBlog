import React from 'react';
import '../../App.css';
import './AboutMe.css';


export default function AboutMe() {


    return (
        <>

    <h1 className='aboutme'> </h1>
    <div className="aboutme-container">
        <div className="aboutme-img-container">
            <img src="/images/aboutme.JPG" alt="" className="aboutme-img"/>        
        </div>
        <div className="aboutme-text-container">
            <p className="aboutme-text-header">About me</p>
            <p className="aboutme-text">
            A Filipino (Cebuano) solo traveler with an extreme desire of exploring a wonderful, interesting and significantly new world. 
            Who travel in an inexpensive way and think that there is always a cheaper way to anything. 
            Seeing the different sides of the world and what the world can offer.
            The idea of getting lost always a thrill and amuse me for it is when you're lost you found yourself. 
            A history addict, to know the story behind every place and things along the way. 
            Loves beer and hope that one day I get the chance to taste different beers in the world.
            </p>
        </div>
    </div>
    
        </>
    )
}
