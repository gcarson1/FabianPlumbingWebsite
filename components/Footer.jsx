// components/Footer.jsx
import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
      <>
        <hr/>
        <div className={styles.footerContainer}>

          <div className={styles.social_icons}>
            <a>
            © {new Date().getFullYear()} Fabian Salts Plumbing Co.
            </a>
            <div className={styles.social_icons}> 
              <a>Book an appraisal with us today!</a>
            </div>

          </div>
        </div>
      </>
    )
  }
  
  export default Footer;