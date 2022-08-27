import React from 'react';
import styles from './Main.module.css'

const MainTranslateSection = () => {
  return (
      <section id={styles.translate}>
        <div className={styles.translate_header}>
          <img src="./img/translate.svg" alt="번역" />
          <h2>
            일부 정보는 자동 번역되었습니다.&nbsp;
            <span className={styles.translate_header_underline}>원문 보기</span>
          </h2>
        </div>
        <p className={styles.translate_sentence}>
          Adaaran Club Rannalhi는 몰디브 최고의 호텔 중 하나이며 몰디브로
          알려진 이국적인 섬 컬렉션 내에서 남말레 환초 끝에 독점적으로
          자리잡고 있습니다. 독특한 위치는 자연 그대로의 해변, 탁월한 스쿠버
          다이빙 기회, 편안한 환경을 제공하며 수도인 말레로 쉽게 이동할 수
          있습니다.
        </p>
      </section>
  );
};

export default MainTranslateSection;