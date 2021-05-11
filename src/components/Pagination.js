import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

import { useDispatch, useSelector } from "react-redux";
import { changePage } from "./redux/ducks/CurrentPage";

const Pagination = (props) => {
  const { postPerPage, totalBlogs, paginate } = props;
  const pageNumbers = [];

  //redux access variable
  const currentPage = useSelector((state) => state.currentPage.page);

  //redux call function
  const dispatch = useDispatch();
  const handleChangePage = (id) => {
    dispatch(changePage(id));
  };

  const paginateCounterLeft = () =>
    currentPage === 1 ? currentPage : handleChangePage(currentPage - 1);
  const paginateCounterRight = () =>
    currentPage === Math.ceil(totalBlogs / postPerPage)
      ? currentPage
      : handleChangePage(currentPage + 1);

  for (let i = 1; i <= Math.ceil(totalBlogs / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="cards-pagination-container">
        <li
          className="cards-pagination-items cards-pagination-item-first"
          onClick={paginateCounterLeft}
        >
          <a className={`cards-pagination-item`}> {"<"} </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`cards-pagination-items ${
              number === currentPage ? "pagination-active" : ""
            }`}
            onClick={() => handleChangePage(number)}
          >
            <a className={`cards-pagination-item`}> {number}</a>
          </li>
        ))}
        <li className="cards-pagination-items cards-pagination-item-last">
          <a className={`cards-pagination-item`} onClick={paginateCounterRight}>
            {">"}{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
