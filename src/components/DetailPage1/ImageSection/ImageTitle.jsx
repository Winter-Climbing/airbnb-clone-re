import React from 'react';
import styles from './ImageSection.module.css'

const ImageTitle = () => {
  return (
    <>
      <section className={styles.image_title}>
        <h1>
          <img src="./img/translate.svg" alt="번역" /> 아다란 클럽 Rannalhi,
          몰디브, 워터 방갈로
        </h1>
        <div className={styles.image_title_social}>
          <span>몰디브</span>
          <div className={styles.image_title_social_btn}>
            <div className={styles.image_title_social_btn_sharing}>
              <img src="/img/sharing.svg" alt="공유" />
              <div>공유하기</div>
            </div>
            <div className={styles.image_title_social_btn_heart}>
              <img src="./img/heart.svg" alt="하트" />
              <div>저장</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageTitle;