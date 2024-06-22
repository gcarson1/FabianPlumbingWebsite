import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 915 && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
        <img align="right" className={styles.menuIcon} src='burger-menu-svgrepo-com.svg' width={80} height={80} alt="Menu"/>
        </div>
        <div className={`${isOpen ? styles.showMenu : ''} ${isOpen ? styles.menuItemsVisible : styles.menuItems}`}>
  
          <img src="" alt=""></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
