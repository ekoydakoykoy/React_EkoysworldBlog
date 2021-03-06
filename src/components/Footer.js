import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "./Button";
import "./Footer.css";
// import { toggleTheme } from './redux/ducks/ThemeChange';

function Footer() {
  //redux access variable
  const theme = useSelector((state) => state.currentTheme.theme);

  // //redux call function
  // const dispatch = useDispatch();
  // const handleChangeTheme = () => {
  //     dispatch(toggleTheme());
  // }

  return (
    <div className={`footer-container ${theme ? "theme-dark" : "theme-light"}`}>
      <section
        className={`footer-subscription ${
          theme ? "theme-dark" : "theme-light"
        }`}
      >
        <p className="footer-subscription-heading">
          Join to received the latest blog content.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at anytime.
        </p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button
              buttonClass={theme ? "theme-dark" : "theme-light"}
              buttonStyle="btn--outline"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div
            className={`footer-link-items ${
              theme ? "theme-dark" : "theme-light"
            }`}
          >
            <h2> About us</h2>
            <Link to="/">History</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div
            className={`footer-link-items ${
              theme ? "theme-dark" : "theme-light"
            }`}
          >
            <h2> Contact us</h2>
            <Link to="/">Email</Link>
            <Link to="/">Phone</Link>
            <Link to="/">Address</Link>
          </div>
          <div
            className={`footer-link-items ${
              theme ? "theme-dark" : "theme-light"
            }`}
          >
            <h2> Social Media</h2>
            <Link
              to={{ pathname: "https://www.instagram.com/ekoydakoykoy/" }}
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              to={{ pathname: "https://www.facebook.com/ekoysworld" }}
              target="_blank"
            >
              Facebook
            </Link>
            <Link
              to={{
                pathname:
                  "https://www.youtube.com/channel/UCB3636G7whMrv8U0jxy19kQ",
              }}
              target="_blank"
            >
              Youtube
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link
              to="/"
              className={`social-logo ${theme ? "theme-dark" : "theme-light"}`}
            >
              <i className="fas fa-globe-asia" /> &nbsp; Ekoy's World
            </Link>
          </div>
          <small
            className={`website-rights ${theme ? "theme-dark" : "theme-light"}`}
          >
            {" "}
            &nbsp; &nbsp; &nbsp;Ekoy's World © 2021
          </small>
          <div className="social-icons">
            <Link
              className={`social-icon-link facebook ${
                theme ? "theme-dark" : "theme-light"
              }`}
              to={{ pathname: "https://www.facebook.com/ekoysworld" }}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className={`social-icon-link instagram ${
                theme ? "theme-dark" : "theme-light"
              }`}
              to={{ pathname: "https://www.instagram.com/ekoydakoykoy/" }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className={`social-icon-link youtube ${
                theme ? "theme-dark" : "theme-light"
              }`}
              to={{
                pathname:
                  "https://www.youtube.com/channel/UCB3636G7whMrv8U0jxy19kQ",
              }}
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
