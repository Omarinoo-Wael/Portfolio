import igImg from "../../assets/instagram.png";
import linkedinImg from "../../assets/linkedin.png";
import githubImg from "../../assets/github.png";
import Logo from "../../assets/OW.png";
import { Row, Col } from "react-bootstrap";
import "./footer.css";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="custom-footer">
      <Col size={12} md={6}>
        <span className="footer-logo">
          <img src={Logo} alt="logo" />
        </span>
      </Col>
      <Col size={12} md={6}>
        <span className="footer-socials">
          <a href="https://www.instagram.com/omarinoo_wael">
            <img src={igImg} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={linkedinImg} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Omarinoo-Wael">
            <img src={githubImg} alt="GitHub" />
          </a>
          <p className="copyright">
            &copy; {year} Omar Wael. All rights reserved.
          </p>
        </span>
      </Col>
    </footer>
  );
}

export default Footer;
