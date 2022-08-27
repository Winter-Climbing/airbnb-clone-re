import React from 'react';
import styles from './Main.module.css'


const MainLodginPlace = () => {
  return (

    <section id={styles.lodging_place}>
      <h2>숙박 장소</h2>
      <div className={styles.lodging_place_item}>
        <img src="./img/detailPage/bed.svg" alt="침대" />
        <h4>침실</h4>
        <p>더블 침대 1개</p>
      </div>
    </section>
  );
};

export default MainLodginPlace;