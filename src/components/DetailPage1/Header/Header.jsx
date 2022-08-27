import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.header_a}>
        <img
          className={styles.header_a_img}
          src="./img/airbnb-home.png"
          alt="에어비앤비 로고"
        />
      </div>
      <div className={styles.header_search}>
        <div className={styles.header_search_bar}>
          <button className={styles.header_search_strong}>검색 시작하기</button>

          <div className={styles.header_search_glassBox}>
            <img id={styles.header_search_glassBox_glass} src="./img/glasses.svg" alt="안경" />
          </div>
        </div>
      </div>
      <div className={styles.header_profile}>
        <div className={styles.header_profile_host}>
          <a href="">호스트 되기</a>
          <button className={styles.header_profile_host_map}>
            <img className={styles.header_profile_host_map_globe} src="./img/detailPage/globe.svg" alt="지구본"/>
          </button>
        </div>
        <div className={styles.header_profile_user}>
          <div>
            <img className={styles.header_profile_user_hambuger} src="./img/detailPage/hambuger.svg" alt="햄버거" />
          </div>
          <div>
            <img className={styles.header_profile_user_login} src="./img/user.svg" alt="로그인이미지" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;