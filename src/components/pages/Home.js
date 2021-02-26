import React, { useState,useEffect }from 'react';
import '../../App.css';
import Cards from '../Cards';
import  HeroSection  from '../HeroSection';

function Home (){
   
    
    //  const [winsize, setWinSize] = useState(window.innerWidth);

     
    //  useEffect( () => {
    //     const reportWindowSize = () => {
    //         setWinSize(window.innerWidth)
    //       }
    //       window.addEventListener('resize', reportWindowSize);
    //       return () => {
    //           window.removeEventListener('resize', reportWindowSize);
    //       }
    //  }, [])



    return (
        <>
        {/* {winsize}
        */}
          
            <HeroSection /> 
            
            <Cards heading="Check out this epic destinations!" closeIcon={false}  numOfPageToShow='3'/>
            
            
        </>
    )
}

export default Home;