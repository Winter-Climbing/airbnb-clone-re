import React from 'react';
// MP = MainPage
import MP from "../../css/mainPage/header.module.css" 


const MainHeader = () => {

  return (
    <div id={MP.header}>
      <div className={MP.header_flex}>
        <div className={MP.header_a}>
          <a href="#">
            <img
              className={MP.header_a_img}
              src="./img/airbnb-home.png" 
              alt="에어비앤비 로고"
            />
          </a>
        </div>
        <div className="header_search">
          <div className={MP.header_search_bar}>
            <button className={MP.header_search_strong}>어디든지</button>
            <span className="koo"></span>
            <button className={MP.header_search_strong}>언제든 일주일</button>
            <div className={MP.header_search_bar_right}>
              <button>게스트 추가</button>
              <div className="header_search_glassBox">
                <img className='header_search_glassBox_glass' src="./img/glasses.svg" alt="안경" />
              </div>
            </div>
          </div>
        </div>
        <div className="header_profile">
          <div className={MP.header_profile_host}>
            <a href="">호스트 되기</a>
            <button className="header_profile_host_map">
              <img src="./img/detailPage/globe.svg" alt="지구본"/>
            </button>
          </div>
          <div className={MP.header_profile_user}>
            <div>
              <img className='header_profile_user_ham' src="./img/hambuger.svg" alt="햄버거" />
            </div>
            <div className="header_profile_user_position">
              <img className='header_profile_user_login' src="./img/user.svg" alt="로그인이미지" />
              <div className="header_profile_user_position_absolute">
                <div className="header_profile_user_position_absolute_color"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default MainHeader;