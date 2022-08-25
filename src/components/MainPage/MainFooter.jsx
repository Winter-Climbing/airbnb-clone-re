import React from 'react';
// styles = MainPage
import styles from "../../css/mainPage/footer.module.css" 

const Mainfooter = () => {

  return (
    <div>
      <footer id={styles.footer}>
        <button className={styles.footer_mapBtn}>
          지도 표시하기
          <img className={styles.footer_mapBtn_img} src="./img/map.svg" alt="지도" />
        </button>
        <div className={styles.footer}>
          <div className={styles.footer_contents}>
            <div className={styles.footer_contents_left}>
              <span>
                <img src="./img/c-50.png" alt="costylesany 로고" /> Airbnb, Inc
              </span>
              <span>개인정보 처리방침</span>
              <span>이용약관</span>
              <span>사이트맵</span>
              <span>한국의 변경된 환불 정책</span>
              <span>회사 세부정보</span>
            </div>
            <div className={styles.footer_contents_right}>
              <button className={styles.footer_contents_right_globeBtn}>
                <img src="./img/detailPage/globe.svg" alt="지구본"/>
                <span>&nbsp;한국어(KR)</span>
              </button>
              <button>
                <span>&#8361; KRW</span>
              </button>
              <button>
                <span>지원 및 참고자료
                  <img src="./img/top.svg" alt="위로"/>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.footer_blahblah}>
            웹사이트 제공자: Airbnb Ireland UC, private unlimited costylesany, 8
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
      </footer>
    </div>
  )
}

export default Mainfooter;
