import React, { useState } from 'react';
import styles from './Pop.module.css'

const Pop = (props) => {
  let btnScroll = 2200

  return (
    <div className={styles.pop_up}>
      <div className={styles.pop_up_list}>
        <span>사진</span>
        <span>편의시설</span>
        <span>후기</span>
        <span>위치</span>
      </div>
      {btnScroll < props.scrollY && 
      <div className={styles.pop_up_priceBtn}>
        <p><span>&#8361;780,957</span>/박</p>
        <button>예약하기</button>
      </div>
      }
    </div>
  );
};

export default Pop;