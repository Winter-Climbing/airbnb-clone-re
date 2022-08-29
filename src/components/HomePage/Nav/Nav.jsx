import React from 'react';
import NavData from '../../../lib/NavData.json'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <>
      <div className={styles.navBtn_flex}>
        <div className={styles.nav_left_btnSpace}>
          <button className={styles.nav_left_btnSpace_btn}>
            <img src="./img/leftBtn.svg" alt="왼쪽버튼" />
          </button>
        </div>
        <div className={styles.nav_right_btnSpace}>
          <button className={styles.nav_right_btnSpace_btn}>
            <img src="./img/rightBtn.svg" alt="오른쪽버튼" />
          </button>
        </div>
        {
          NavData.map((NavData) => {
            return (
            <button key={NavData.id} className={styles.nav_btn}>
              <div className={styles.nav_btn_title}>
                <img
                  src={NavData.img}
                  alt="아이콘"
                  className={styles.nav_btn_title_img}
                />
                <p className={styles.nav_btn_title_p}>{NavData.title}</p>
              </div>
            </button>
            )
          })
        }
      </div>
    </>
  );
};

export default Nav;