import React from 'react';
import styles from './HeaderContainer.module.css'
import Header from '../../../components/DetailPage1/Header/Header';

const HeaderContainer = () => {
  return (
    <div>
      <header id={styles.header}>
        <div className={styles.header_flex}>
          <Header />
        </div>
      </header>
    </div>
  );
};

export default HeaderContainer;