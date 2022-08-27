import React from 'react';
import styles from './ImageSection.module.css'

const Images = () => {
  return (
    <>
      <section id={styles.images}>
        <div className={styles.images_header}></div>
        <div className={styles.images_column_left}>
          <div className={styles.images_first}></div>
          <div className={styles.images_third}></div>
        </div>
        <div className={styles.images_column_right}>
          <div className={styles.images_second}></div>
          <div className={styles.images_fourth}></div>
        </div>
        <button className={styles.images_btn}>
          <img src="./img/allBtn.svg" alt="사진모두보기" />
          <div>사진 모두 보기</div>
        </button>
      </section> 
    </>
  );
};

export default Images;