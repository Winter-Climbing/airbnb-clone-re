import React from 'react';
import styles from './FooterContainer.module.css'
import Footer from '../../../components/HomePage/Footer/Footer'

const FooterContainer = () => {
  return (
    <div>
      <footer id={styles.footer}>
        <Footer/>
      </footer>
    </div>
  );
};

export default FooterContainer;