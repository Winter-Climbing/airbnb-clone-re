import React from 'react';
// DH = DetailPage
import DH from '../../css/detailPage/detailHeader.module.css'

const DetailHeader = () => {
  return (
    <div>
      <header id={DH.header}>
        <div className={DH.header_flex}>
          <div className={DH.header_a}>
            {/* <a href="#"> */}
              <img
                className={DH.header_a_img}
                src="./img/airbnb-home.png"
                alt="에어비앤비 로고"
              />
            {/* </a> */}
          </div>
          <div className={DH.header_search}>
            <div className={DH.header_search_bar}>
              <button className={DH.header_search_strong}>검색 시작하기</button>

              <div className={DH.header_search_glassBox}>
                <img id="header_search_glassBox_glass" src="./img/glasses.svg" alt="안경" />
              </div>
            </div>
          </div>
          <div className={DH.header_profile}>
            <div className={DH.header_profile_host}>
              <a href="">호스트 되기</a>
              <button className={DH.header_profile_host_map}>
                <img className='header_profile_host_map_globe' src="./img/detailPage/globe.svg" alt="지구본"/>
              </button>
            </div>
            <div className={DH.header_profile_user}>
              <div>
                <img className={DH.header_profile_user_hambuger} src="./img/detailPage/hambuger.svg" alt="햄버거" />
              </div>
              <div>
                <img className={DH.header_profile_user_login} src="./img/user.svg" alt="로그인이미지" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DetailHeader;