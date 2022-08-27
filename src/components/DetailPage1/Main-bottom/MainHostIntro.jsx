import React from 'react';
import styles from './Main.module.css';

const MainHostIntro = () => {
  return (
    <section id={styles.host_intro}>
      <div className={styles.host_intro_header}>
        <img
          src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240"
          alt=""
        />
        <div className={styles.host_intro_header_detail}>
          <h2>호스트:Dorothy님</h2>
          <p>회원 가입일:2015년 10월</p>
        </div>
      </div>
      <div id={styles.host_intro_detail}>
        <div className={styles.host_intro_detail}>
          <div className={styles.host_intro_detail_left}>
            <div>
              <img src="./img/variable/blackstar.svg" alt="별표" />
              <span>후기 765개</span>
            </div>
            <div>
              <img src="./img/variable/confirmation.svg" alt="본인 인증" />
              <span>본인 인증 완료</span>
            </div>
          </div>
          <p>
            저는 1978년 이즈미르에서 태어났습니다. 관광 및 호텔 관리를 졸업한
            후, 하우스키핑부터 게스트 관계까지 관광 부문의 여러 부서에서
            일했습니다. 현재 저는 말리 관광 및 여행 LLC의 일원으로 A 그룹
            여행사인 LookBookHoliday의 고객 서비스와 에어비앤비 채널 관리를
            수행합니다. 1200개 이상의 직접 연락이…
            <span className={styles.host_intro_detail_more}>더 읽기</span>
          </p>
        </div>
        <div className={styles.host_intro_detail_right}>
          <span>언어:English, Türkçe</span>
          <span>응답률:66%</span>
          <span>응답 시간: 하루 이내</span>
          <button className={styles.host_intro_detail_right_call}>
            호스트에게 연락하기
          </button>
          <div className={styles.host_intro_detail_right_security}>
            <img src="./img/variable/security.svg" alt="보안" />
            <span
              >안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
              대화를 나누지 마세요.</span
            >
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHostIntro;