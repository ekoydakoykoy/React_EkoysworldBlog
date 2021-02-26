import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';


const Pagination = (props) => {
    const { postPerPage, totalBlogs, paginate, currentPage} = props;
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalBlogs/postPerPage); i++) {
            pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='cards-pagination-container'>
                { pageNumbers.map( number => (
                    <li key={number} className={`cards-pagination-items ${number === currentPage ? 'pagination-active' : ''}`} onClick={() => paginate(number)}>
                        <a className={`cards-pagination-item`} to='!#' > {number}</a>
                        {console.log(currentPage) }
                    </li>
                )) }
            </ul>
        </nav>
    )
}

export default Pagination
