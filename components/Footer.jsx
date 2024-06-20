// components/Footer.jsx
import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
      <>
        <hr/>
        <div className={styles.footerContainer}>

          <div className={styles.social_icons}>
            <a>
            © {new Date().getFullYear()} Gabriel's Portfolio 
            </a>
            <a> </a>
            <a
              href="https://github.com/gcarson1"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a> </a>
            <a
              href="https://www.linkedin.com/in/gabriel-carson-26b140259"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;