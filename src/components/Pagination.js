import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';


const Pagination = (props) => {
    const { postPerPage, totalBlogs, paginate, currentPage} = props;
    const pageNumbers = [];

    const paginateCounterLeft = () => currentPage === 1 ? currentPage :  paginate(currentPage - 1);
    const paginateCounterRight = () => currentPage === Math.ceil(totalBlogs/postPerPage) ? currentPage :  paginate(currentPage + 1);
          

    for(let i = 1; i<= Math.ceil(totalBlogs/postPerPage); i++) {
            pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='cards-pagination-container'>
                <li className='cards-pagination-items cards-pagination-item-first' onClick={paginateCounterLeft}> 
                    <a className={`cards-pagination-item`} > {"<"} </a>
                 </li>
                { pageNumbers.map( number => (
                    <li key={number} className={`cards-pagination-items ${number === currentPage ? 'pagination-active' : ''}`} onClick={() => paginate(number)}>
                        <a className={`cards-pagination-item`} > {number}</a>
                        {console.log(currentPage) }
                    </li>
                )) }
                <li className='cards-pagination-items cards-pagination-item-last'> 
                    <a className={`cards-pagination-item`} onClick={paginateCounterRight}>{">"} </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
