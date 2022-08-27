import React from 'react';
import styles from './Main.module.css';

const MainRule = () => {
  return (
    <section id={styles.checkList}>
      <h2>알아두어야 할 사항</h2>
      <div className={styles.checkList_contents}>
        <div className={styles.checkList_contents_rule}>
          <h4>숙소 이용규칙</h4>
          <div>
            <img src="./img/variable/watch.svg" alt="시계" />
            <span>체크인:오후 3:00 이후</span>
          </div>
        </div>
        <div className={styles.checkList_contents_health}>
          <h4>건강과 안전</h4>
          <div className={styles.checkList_contents_health_fumigator}>
            <img src="./img/variable/blackstar.svg" alt="방역수칙" />
            <span className={styles.checkList_contents_health_rule}
              >에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</span
            >
          </div>
          <div>
            <img src="./img/variable/alarm.svg" alt="일산화탄소 경보기" />
            <span>일산화탄소 경보기</span>
          </div>
          <div>
            <img src="./img/variable/fireAlarm.svg" alt="화재경보기" />
            <span>화재경보기</span>
          </div>
          <span className={styles.checkList_contents_more}>더 보기 </span>
        </div>
        <div className={styles.checkList_contents_refund}>
          <h4>환불 규칙</h4>
          <div>
            <span>9월 12일 전까지 무료로 취소하실 수 있습니다.</span>
          </div>
          <span className={styles.checkList_contents_more}>더 보기</span>
        </div>
      </div>
    </section>
  );
};

export default MainRule;