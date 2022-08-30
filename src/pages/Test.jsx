import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from './NavDataTest.json'
import styles from './Nav.module.css'







const Test = () => {

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <div className={styles.nav_right_btnSpace}>
        <div className={styles.nav_right_btnSpace_btn}> 
          <img src="./img/rightBtn.svg" alt="오른쪽버튼" />
        </div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <div className={styles.nav_left_btnSpace}>
        <div className={styles.nav_left_btnSpace_btn}> 
        <img src="./img/leftBtn.svg" alt="왼쪽버튼" />
        </div>
      </div>
    </div>
  );
}

  const settings = {
  dots: false,
  infinite: false,
  speed: 700,
  slidesToShow: 14,
  slidesToScroll: 9,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <>
    <div className={styles.nav_flex}>
      <Slider {...settings}>
        {data.map((item) => {
          return (
          <button key={item.id} className={styles.nav_btn}>
            <div className={styles.nav_btn_title}>
              <img className={styles.nav_btn_title_img} src=  {item.img} alt={item.title} />
              <p className={styles.nav_btn_title_p}>{item.title}</p>
            </div>
          </button>
          )
        })}
      </Slider>
    </div>
    </>
  )

};



export default Test;