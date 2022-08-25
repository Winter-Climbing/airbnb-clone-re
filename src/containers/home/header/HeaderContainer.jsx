import React from 'react';
import styles from './HeaderContainer.module.css'
import Header from '../../../components/HomePage/Header/Header'

const HeaderContainer = () => {
  return (
    <div id={styles.header}>
      <div className={styles.header_flex}>
        <Header/>
      </div>
    </div>
  );
};

export default HeaderContainer;