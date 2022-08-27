import React from 'react';
import styles from './Main.module.css'

const MainConvenientFacilities = () => {
  
  return (
  <section id={styles.convenient_facilities}>
    <h2>숙소 편의시설</h2>
    <div className={styles.convenient_facilities_grid}>
      <div className={styles.convenient_facilities_grid_flex}>
        <img src="./img/detailPage/wifi.svg" alt="와이파이" />
        <span>무선 인터넷</span>
      </div>
      <div className={styles.convenient_facilities_grid_flex}>
        <img src="./img/detailPage/water.svg" alt="수영장" />
        <span>수영장</span>
      </div>
      <div className={styles.convenient_facilities_grid_flex}>
        <img src="./img/detailPage/TV.svg" alt="TV" />
        <span>TV</span>
      </div>
      <div className={styles.convenient_facilities_grid_flex}>
        <img src="./img/detailPage/snow.svg" alt="에어컨" />
        <span>에어컨</span>
      </div>
      <div className={styles.convenient_facilities_grid_flex}>
        <img src="./img/detailPage/hair.svg" alt="헤어드라이어" />
        <span>헤어드라이어</span>
      </div>
      <div className={styles.convenient_facilities_grid_flex}>
        <img src="./img/detailPage/breakfast.svg" alt="아침식사" />
        <span>아침식사</span>
      </div>
      <div className={styles.convenient_facilities_grid_flex}>
        <img src="./img/detailPage/calender.svg" alt="달력" />
        <span>장기 숙바 가능</span>
      </div>
    </div>
    <button>편의시설 14개 모두 보기</button>
  </section>
  );
};

export default MainConvenientFacilities;