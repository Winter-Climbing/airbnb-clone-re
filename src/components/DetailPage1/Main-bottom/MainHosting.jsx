import React from 'react';
import styles from './Main.module.css';

const MainHosting = () => {
  return (
    <section className={styles.hosting}>
      <h2>호스팅 지역</h2>
      <p>몰디브</p>
      <div className={styles.hosting_map}>
        <button></button>
        <div className={styles.hosting_map_publicTransportationc}>
          <input
            type="checkbox"
            id={styles.hosting_map_publicTransportationc_check}
          />
          <span>대중교통</span>
        </div>
        <div className={styles.hosting_map_plusMinus}>
          <button>+</button>
          <button>-</button>
        </div>
        <div className={styles.hosting_map_people}>
          <img src="./img/variable/people.png" alt="사람" />
        </div>
        <div className={styles.hosting_map_homeBox}>
          <div className={styles.hosting_map_home_background}></div>
          <div className={styles.hosting_map_home}>
            <img src="./img/variable/home.svg" alt="집" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHosting;