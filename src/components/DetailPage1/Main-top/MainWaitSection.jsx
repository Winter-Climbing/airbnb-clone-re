import React from 'react';
import styles from './Main.module.css'

const MainWaitSection = () => {
  return (
      <section id={styles.wait}>
        <div className={styles.wait_words}>
          <img src="./img/detailPage/water.svg" alt="물놀이" />
          <div className={styles.wait_words_sentence}>
            <h2>마음껏 물놀이를 즐기세요</h2>
            <p>해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중 하나입니다.</p>
          </div>
        </div>
        <div className={styles.wait_words}>
          <img src="./img/detailPage/star.svg" alt="별표" />
          <div className={styles.wait_words_sentence}>
            <h2>경험이 풍부한 호스트</h2>
            <p>Dorothy님은 다른 숙소에 대해 765개의 후기가 있습니다.</p>
          </div>
        </div>
        <div className={styles.wait_words}>
          <img src="./img/detailPage/calender.svg" alt="달력" />
          <div className={styles.wait_words_sentence}>
            <h2>9월 12일 전까지 무료로 취소하실 수 있습니다.</h2>
          </div>
        </div>
      </section>
  );
};

export default MainWaitSection;