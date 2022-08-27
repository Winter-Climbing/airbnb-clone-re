import React from 'react';
import styles from './Nav.module.css'

const NavFilter = (props) => {
  return (
    <>
      <button className={styles.nav_filter} onClick={() => {props.setFilter(true)}}>
        <img className={styles.nav_filter_img} src="./img/filter.svg"  alt="필터이미지" />
        <p>필터</p>
      </button>
    </>
  );
};

export default NavFilter;