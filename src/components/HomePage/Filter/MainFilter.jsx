import React from 'react';
import styles from './MainFilter.module.css'


const MainFilter = (props) => {

  return (
    <div>
      <div id={styles.filter_display}>
        <div id={styles.filter}>
        <div className={styles.filter_contents}>

          {/* <!-- 헤더 --> */}
          <header   className={styles.filter_contents_sticky}>
            <div className={styles.filter_contents_header}>
              <button className={styles.filter_contents_header_btn} onClick={() => {props.setFilter(false)}}> 
                <img className={styles.filter_contents_header_btn_img} src="./img/cancel.svg" alt="취소" />
              </button>
              <h2>필터</h2>
            </div>
          </header>
          <div className={styles.filter_scroll}>

          {/* <!-- 가격 범위 --> */}

          <div className={styles.filter_contents_priceRange}>
            <div className={styles.filter_contents_priceRange_header}>
              <h2>가격범위</h2>
              <p>평균 1박 요금은 ₩407,601입니다</p>
            </div>
            <div className={styles.filter_contents_priceRange_chart}></div>
            <div className={styles.filter_contents_priceRange_price}>
              <div className={styles.filter_contents_priceRange_price_low}>
                <span className={styles.filter_contents_priceRange_price_lowHigh}
                  >최저 요금</span
                >
                <span className={styles.filter_contents_priceRange_price_lowHigh_price}
                  >&#8361; 13000</span
                >
              </div>
              <span className={styles.filter_contents_priceRange_price_}>-</span>
              <div className={styles.filter_contents_priceRange_price_high}>
                <span className={styles.filter_contents_priceRange_price_lowHigh}
                  >최고 요금</span
                >
                <span className={styles.filter_contents_priceRange_price_lowHigh_price}
                  >&#8361; 6700000+</span
                >
              </div>
            </div>
          </div>

          {/* <!-- 숙소 유형 --> */}

          <div className={styles.filter_contents_lodgingType}>
            <h2>숙소 유형</h2>
            <div className={styles.filter_contents_checkBox_grid}>
              <div className={styles.filter_contents_checkBox}>
                <input type="checkbox" />
                <div>
                  <h4>집 전체</h4>
                  <span>단독으로 사용하는 공간 전체</span>
                </div>
              </div>
              <div className={styles.filter_contents_checkBox}>
                <input type="checkbox" />
                <div>
                  <h4>개인실</h4>
                  <span>집 또는 호텔의 개인실과 일부 공용 공간</span>
                </div>
              </div>
              <div className={styles.filter_contents_checkBox}>
                <input type="checkbox" />
                <div>
                  <h4>다인실</h4>
                  <span>다른 사람들과 함께 사용하는 다인실 및 공용 공간</span>
                </div>
              </div>
            </div>
          </div>
{/*   
          <!-- 침실과 침대 --> */}
          <div className={styles.filter_contents_bedroom}>
            <h2>침실과 침대</h2>
            <div className={styles.filter_contents_bedroom_list}>
              <h4>침실</h4>
              <div className={styles.filter_contents_bedroom_list_btn}>
                <button>상관없음</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8+</button>
              </div>
            </div>
            <div className={styles.filter_contents_bedroom_list}>
              <h4>침대</h4>
              <div className={styles.filter_contents_bedroom_list_btn}>
                <button>상관없음</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8+</button>
              </div>
            </div>
            <div className={styles.filter_contents_bedroom_list}>
              <h4>욕실</h4>
              <div className={styles.filter_contents_bedroom_list_btn}>
                <button>상관없음</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8+</button>
              </div>
            </div>
          </div>

          {/* <!-- 건물 유형 --> */}
          <div className={styles.filter_contents_bulidingType}>
            <h2>건물 유형</h2>
            <div className={styles.filter_contents_bulidingType_flex}>
              <div className={styles.filter_contents_bulidingType_flex_type}>
                <img
                  src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
                  alt="집"
                />
                <span>단독 또는 <br/> 다세대 주택</span>
              </div>
              <div className={styles.filter_contents_bulidingType_flex_type}>
                <img
                  src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg"
                  alt="아파트"
                />
                <span>아파트</span>
              </div>
              <div className={styles.filter_contents_bulidingType_flex_type}>
                <img
                  src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg"
                  alt="별채"
                />
                <span>게스트용 별채</span>
              </div>
              <div className={styles.filter_contents_bulidingType_flex_type}>
                <img
                  src="https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg"
                  alt="호텔"
                />
                <span>호텔</span>
              </div>
            </div>
          </div>

          {/* <!-- 편의시설 --> */}
          <div className={styles.filter_contents_amenities}>
            <h2>편의시설</h2>
            <div>
              <h4 className={styles.filter_contents_amenities_necessary}>필수</h4>
              <div className={styles.filter_contents_checkBox_grid}>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>무선 인터넷</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>주방</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>세탁기</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>건조기</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>에어컨</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>난방</h4>
                  </div>
                </div>
              </div>
              <span>더 보기</span>
            </div>
          </div>

          {/* <!-- 예약 옵션 --> */}
          <div className={styles.filter_contents_reserve}>
            <h2>예약 옵션</h2>
            <div className={styles.filter_contents_reserve_list}>
              <div className={styles.filter_contents_reserve_list_sentence}>
                <h4>즉시 예약</h4>
                <span>호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소</span>
              </div>
              <div className={styles.wrapper}>
                <input type="checkbox" id={styles.switch}/>
                <label htmlFor="switch" className={styles.switch_label}>
                  <span className={styles.onf_btn}></span>
                </label>
              </div>
            </div>
            <div className={styles.filter_contents_reserve_list}>
              <div className={styles.filter_contents_reserve_list_sentence}>
                <h4>즉시 예약</h4>
                <span>호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소</span>
              </div>
              <div className={styles.wrapper}>
                <input type="checkbox" id={styles.switch}/>
                <label htmlFor="switch" className={styles.switch_label}>
                  <span className={styles.onf_btn}></span>
                </label>
              </div>
            </div>
          </div>

          {/* <!-- 접근성 편의 --> */}
          <div className={styles.filter_contents_accessibility}>
            <div className={styles.filter_contents_accessibility_title}>
              <h2>접근성 편의</h2>
              <p>호스트가 제종하고  에어비앤비에서   검토한 정보입니다.</p>
            </div>
            <div className={styles.filter_contents_accessibility_checkBox}>
              <h4>게스트 출입구 및 주차장</h4>
              <div className={styles.filter_contents_checkBox_grid}>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>게스트 출입구에 계단이나 문턱 없음</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>너비 81cm 이상의 게스트 출입구</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>휠체어 접근 가능 주차 공간</h4>
                  </div>
                </div>
                <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                  <input type="checkbox" />
                  <div>
                    <h4>게스트 출입구까지 계단이나 문턱 없이 이동 가능</h4>
                  </div>
                </div>
              </div>
            </div>
            <span>더 표시</span>
          </div>

          {/* <!-- 최고 수준의 숙소 --> */}
          <div className={styles.filter_contents_bestLodging}>
            <h2>최고 수준의 숙소</h2>
            <div className={styles.filter_contents_bestLodging_list}>
              <div className={styles.filter_contents_reserve_list}>
                <div className={styles.filter_contents_reserve_list_sentence}>
                  <h4>슈퍼 호스트</h4>
                  <span>슈퍼호스트의 숙소에 머물러보세요</span>
                  <div>더 알아보기</div>
                </div>
                <div className={styles.wrapper}>
                  <input type="checkbox" id={styles.switch}/>
                  <label htmlFor="switch" className={styles.switch_label}>
                    <span className={styles.onf_btn}></span>
                  </label>
                </div>
              </div>
              <div className={styles.filter_contents_reserve_list}>
                <div className={styles.ilter_contents_reserve_list_sentence}>
                  <h4>에어비앤비 플러스</h4>
                  <span>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</span>
                </div>
                <div className={styles.wrapper}>
                  <input type="checkbox" id={styles.switch}/>
                  <label htmlFor="switch" className={styles.switch_label}>
                    <span className={styles.onf_btn}></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 호스트 언어 --> */}
          <div className={styles.filter_contents_language}>
            <h2>호스트 언어</h2>
            <div className={styles.filter_contents_checkBox_grid}>
              <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                <input type="checkbox" />
                <div>
                  <h4>영어</h4>
                </div>
              </div>
              <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                <input type="checkbox" />
                <div>
                  <h4>프랑스어</h4>
                </div>
              </div>
              <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                <input type="checkbox" />
                <div>
                  <h4>독일어</h4>
                </div>
              </div>
              <div className={`${styles.filter_contents_checkBox} ${styles.filter_contents_amenities_list}`}>
                <input type="checkbox" />
                <div>
                  <h4>일본어</h4>
                </div>
              </div>
            </div>
            <span>더 표시</span>
          </div>
        </div>

          {/* <!-- Filter footer --> */}
          <footer className={styles.filter_contents_footer}>
            <h4>전체 해제</h4>
            <div>숙소857개표시</div>
          </footer>
        </div>
        </div>
      </div>
    </div>
  )
};

export default MainFilter;