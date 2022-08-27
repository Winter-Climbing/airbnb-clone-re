import React from 'react';
import styles from './Main.module.css'


const MainAirCoverSection = () => {
  return (
    <section id={styles.air_cover}>
      <img
        src="https://a0.muscache.com/pictures/aircover/aircover-logo-ko/original/c4217131-d53a-45b4-b78a-81fc968eefa0.svg"
        alt="에어커버로고"
      />
      <p>
        모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
        경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
        포함됩니다.
      </p>
      <p>더 알아보기</p>
    </section>
  );
};

export default MainAirCoverSection;