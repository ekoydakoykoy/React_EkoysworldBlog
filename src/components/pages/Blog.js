import React from 'react';
import '../../App.css';
import Cards from '../Cards';

export default function Blog() {
    return (
        <>
        <Cards heading='Recent Blog posts' closeIcon={true} numOfPageToShow='2' />
        
        </>
    )
}
