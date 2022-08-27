import React from 'react';
import styles from './Main.module.css'

const MainAside = () => {
  return (
    <aside className={styles.main_right}>
      <div className={styles.main_right_top}>
        <h1>&#8361;782,076<span> /박</span></h1>
        <div className={styles.main_right_inOut}>
          <div className={styles.main_right_in}>
            <span>체크인</span>
            <span>2022. 10. 12.</span>
          </div>
          <div className={styles.main_right_out}>
            <span>체크아웃</span>
            <span>2022. 10. 17.</span>
          </div>
        </div>
        <div className={styles.main_right_guest}>
          <div className={styles.main_right_guest_info}>
            <span>인원</span>
            <span>게스트1명</span>
          </div>
          <div>
            <img
              src="./img/detailPage/bottomDirection.svg"
              alt="화살표 방향
          아래"
            />
          </div>
        </div>
        <button className={styles.main_right_reservation_btn}>예약하기</button>
        <p className={styles.main_right_reservation_btn_words}>
          예약 확정 전에는 요금이 청구되지 않습니다.
        </p>
        <div className={styles.main_right_charge}>
          <div className={styles.main_right_charge_price}>
            <div className={styles.main_right_charge_price_underline}>
              &#8361;782,076 x 5박
            </div>
            <div>&#8361;3,910,380</div>
          </div>
          <div className={styles.main_right_charge_commission}>
            <div className={styles.main_right_charge_commission_underline}>
              서비스 수수료
            </div>
            <div>&#8361;0</div>
          </div>
        </div>
        <div className={styles.main_right_total}>
          <div>총 합계</div>
          <div>&#8361;3,910,380</div>
        </div>
      </div>
      <div className={styles.main_right_bottom}>
        <img src="./img/detailPage/declare.svg" alt="신고하기" />
        <span>숙소 신고하기</span>
      </div>
    </aside>
  );
};

export default MainAside;