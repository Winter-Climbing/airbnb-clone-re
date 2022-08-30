import React from 'react';
import Test from '../../../components/HomePage/Nav/Test'
import NavFilter from '../../../components/HomePage/Nav/NavFilter'
import styles from './NavContainer.module.css'

const NavContainer = (props) => {
  return (
    <div>
      <nav>
        <div className={styles.nav_flex}>
          <Test/>
          <NavFilter filter={props.filter} setFilter={props.setFilter}/>
        </div>
      </nav>
    </div>
  );
};

export default NavContainer;