import React from 'react';
import styles from './Main.module.css'

const MainTitleSection = () => {
  return (

      <section className={styles.main_left_title}>
        <div className={styles.main_left_title_text}>
          <h1>Dorothy님이 호스팅하는 돔하우스</h1>
          <span>최대 인원 6명</span>
          <span>침실 1개</span>
          <span>침대 1개</span>
          <span>욕실 1개</span>
        </div>
        <img
          src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240"
          alt=""
        />
      </section>

  );
};

export default MainTitleSection;