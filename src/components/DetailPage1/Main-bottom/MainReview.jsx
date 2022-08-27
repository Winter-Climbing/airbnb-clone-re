import React from 'react';
import styles from './Main.module.css';

const MainReview = () => {
  
  return (
    <section className={styles.reviews}>
      <h2>후기(아직)없음</h2>
      <div className={styles.reviews_contents}>
        <div className={styles.reviews_contents_star}>
          <img src="./img/detailPage/star.svg" alt="별표" />
          <p>
            이 호스트의 다른 숙소에 대한 후기가 765개 있습니다.
            <span className={styles.reviews_contents_underline}
              >다른 숙소 후기 보기</span
            >
          </p>
        </div>
        <div className={styles.reviews_contents_reserve}>
          <img src="./img/detailPage/globe.svg" alt="지구본" />
          <p>
            여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은
            <span className={styles.reviews_contents_underline}
              >에어비앤비의 게스트 환불 정책</span
            >에 따라 보호를 받습니다.
          </p>
        </div>
      </div>
    </section>
  )
};

export default MainReview;