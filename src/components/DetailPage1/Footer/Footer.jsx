import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer_webPages}>
        <div className={styles.footer_webPages_flex}>
          <div className={styles.footer_webPages_flex_apply}>
            <h4>에어비앤비 지원</h4>
            <p>도움말 센터</p>
            <p>에어커버</p>
            <p>안전 정보</p>
            <p>장애인 지원</p>
            <p>예약 취소 옵션</p>
            <p>에어비앤비의 코로나19 대응 방안</p>
            <p>이웃 민원 신고</p>
          </div>
          <div className={styles.footer_webPages_flex_community}>
            <h4>커뮤니티</h4>
            <p>Airbnb.org: 재난 구호 숙소</p>
            <p>아프간 난민 지원</p>
            <p>차별 철폐를 위한 노력</p>
          </div>
          <div className={styles.footer_webPages_flex_hosting}>
            <h4>호스팅</h4>
            <p>호스팅 시작하기</p>
            <p>호스트를 위한 에어커버</p>
            <p>호스팅 자료 둘러보기</p>
            <p>커뮤니티 포럼 방문하기</p>
            <p>책임감 있는 호스팅</p>
          </div>
          <div className={styles.footer_webPages_flex_airbnb}>
            <h4>에어비앤비</h4>
            <p>뉴스룸</p>
            <p>새로운 기능에 대해 알아보기</p>
            <p>에어비앤비 공동창업자의 메시지</p>
            <p>채용정보</p>
            <p>투자자 정보</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer_contents}>
          <div className={styles.footer_contents_left}>
            <span>
              <img src="./img/c-50.png" alt="company 로고" /> Airbnb, Inc
            </span>
            <span>개인정보 처리방침</span>
            <span>이용약관</span>
            <span>사이트맵</span>
            <span>한국의 변경된 환불 정책</span>
            <span>회사 세부정보</span>
          </div>
          <div className={styles.footer_contents_right}>
            <a>
              <img src="./img/footer/globe.svg" alt="" />
              <span>한국어 (KR)</span>
            </a>
            <a>
              <span>&#8361; KRW</span>
            </a>
          </div>
          <div className={styles.footer_contents_icons}>
            <p className="icon">
              <img src="./img/heart.svg" alt="" />
            </p>
            <p>
              <img src="./img/detailPage/bed.svg" alt="" />
            </p>
            <p>
              <img src="./img/detailPage/breakfast.svg" alt="" />
            </p>
            <p>
              <img src="./img/detailPage/keyboard.svg" alt="네이버블로그"
            /></p>
            <p><img src="./img/detailPage/TV.svg" alt="에어비앤비네이버블로그"
            /></p>
          </div>
        </div>
        <div className={styles.footer_blahblah}>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian
          Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호:
          IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅
          서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
          통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소,
          체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </div>
      </div>
    </>
  );
};

export default Footer;