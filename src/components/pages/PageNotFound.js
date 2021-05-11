import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  let history = useHistory();
  return (
    <div className="pnf-container">
      <div className="pnf-div pnf-head"> OOOPSS! </div>
      <div className="pnf-div pnf-sub-head">
        The page you were looking for doesn't exist.
      </div>
      <div className="pnf-div">
        <img
          src="/images/pagenotfound.jpg"
          alt=""
          className="pagenotfound-img"
        />
      </div>
      <div className="pnf-div pnf-remind">
        You might have type in the wrong address or the page has been moved. In
        the meantime, try again or <Link to="/">return to the home page. </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
