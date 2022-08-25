import React from 'react';
import LodgingData from "../../../lib/LodgingData.json"
import styles from "./Main.module.css"
import { Link } from "react-router-dom";

const JsonMain = () => {
  <Link to="/detailpage"></Link>

  return (
    <>
      {
        LodgingData.map((index, i) => {
            return (
              <div key={i}>
                <Link to="/detailpage">
                  <section className={styles.lodging}>
                    <div className={styles.lodging_img}>
                      <img className={styles.lodging_img_objectfit} src={index.background} alt="몰디브사진" />
                      <button className={styles.lodging_img_heartBtn}>
                        <img
                          src="./img/favorite_border.svg"
                          alt="하트아이콘"
                          className={styles.heartIcon}
                        />
                      </button>
                      <button className={styles.lodging_rightBtn}>&#62;</button>
                    </div>
                    <div className={styles.lodging_text}>
                      <div className={styles.lodging_text_title}>
                        <h2>{index.title}</h2>
                        <span className={styles.lodging_text_title_star}>
                          <img className={styles.lodging_text_title_star_img} src="./img/star.svg" alt="별표" />{index.star}
                        </span>
                      </div>
                      <p>{index.distance}</p>
                      <p className={styles.lodging_text_bottom}>{index.date}</p>
                      <p><span className={styles.lodging_text_price}>&#8361;{index.price}</span> / 박</p>
                    </div>
                  </section>
                </Link>
              </div>
            )  
          })
        }
    </>      
  );
};

export default JsonMain;