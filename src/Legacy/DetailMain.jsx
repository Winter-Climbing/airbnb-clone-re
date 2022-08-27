import React from 'react';
import styles from '../../css/detailPage/detailMain.module.css'

const DetailMain = () => {
  return (
    <div>
      <main id="main">
        {/* <!-- Main Left --> */}

        <article className={styles.main_left}>
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

          <section id="wait">
            <div className="wait_words">
              <img src="./img/detailPage/water.svg" alt="물놀이" />
              <div className="wait_words_sentence">
                <h2>마음껏 물놀이를 즐기세요</h2>
                <p>해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중 하나입니다.</p>
              </div>
            </div>
            <div className="wait_words">
              <img src="./img/detailPage/star.svg" alt="별표" />
              <div className="wait_words_sentence">
                <h2>경험이 풍부한 호스트</h2>
                <p>Dorothy님은 다른 숙소에 대해 765개의 후기가 있습니다.</p>
              </div>
            </div>
            <div className="wait_words">
              <img src="./img/detailPage/calender.svg" alt="달력" />
              <div className="wait_words_sentence">
                <h2>9월 12일 전까지 무료로 취소하실 수 있습니다.</h2>
              </div>
            </div>
          </section>

          <section id={styles.air_cover}>
            <img
              src="https://a0.muscache.com/pictures/aircover/aircover-logo-ko/original/c4217131-d53a-45b4-b78a-81fc968eefa0.svg"
              alt="에어커버로고"
            />
            <p>
              모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
              경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
              포함됩니다.
            </p>
            <p>더 알아보기</p>
          </section>
          <section id="translate">
            <div className="translate_header">
              <img src="./img/translate.svg" alt="번역" />
              <h2>
                일부 정보는 자동 번역되었습니다.&nbsp;
                <span className="translate_header_underline">원문 보기</span>
              </h2>
            </div>
            <p className="translate_sentence">
              Adaaran Club Rannalhi는 몰디브 최고의 호텔 중 하나이며 몰디브로
              알려진 이국적인 섬 컬렉션 내에서 남말레 환초 끝에 독점적으로
              자리잡고 있습니다. 독특한 위치는 자연 그대로의 해변, 탁월한 스쿠버
              다이빙 기회, 편안한 환경을 제공하며 수도인 말레로 쉽게 이동할 수
              있습니다.
            </p>
          </section>

          <section id="lodging_place">
            <h2>숙박 장소</h2>
            <div className="lodging_place_item">
              <img src="./img/detailPage/bed.svg" alt="침대" />
              <h4>침실</h4>
              <p>더블 침대 1개</p>
            </div>
          </section>

          <section id="convenient_facilities">
            <h2>숙소 편의시설</h2>
            <div className="convenient_facilities_grid">
              <div className='convenient_facilities_grid_flex'>
                <img src="./img/detailPage/wifi.svg" alt="와이파이" />
                <span>무선 인터넷</span>
              </div>
              <div className='convenient_facilities_grid_flex'>
                <img src="./img/detailPage/water.svg" alt="수영장" />
                <span>수영장</span>
              </div>
              <div className='convenient_facilities_grid_flex'>
                <img src="./img/detailPage/TV.svg" alt="TV" />
                <span>TV</span>
              </div>
              <div className='convenient_facilities_grid_flex'>
                <img src="./img/detailPage/snow.svg" alt="에어컨" />
                <span>에어컨</span>
              </div>
              <div className='convenient_facilities_grid_flex'>
                <img src="./img/detailPage/hair.svg" alt="헤어드라이어" />
                <span>헤어드라이어</span>
              </div>
              <div className='convenient_facilities_grid_flex'>
                <img src="./img/detailPage/breakfast.svg" alt="아침식사" />
                <span>아침식사</span>
              </div>
              <div className='convenient_facilities_grid_flex'>
                <img src="./img/detailPage/calender.svg" alt="달력" />
                <span>장기 숙바 가능</span>
              </div>
            </div>
            <button>편의시설 14개 모두 보기</button>
          </section>

          <section id="calender">
            <h2>MV에서 5박</h2>
            <p>2022년 10월 12일 - 2022년 10월 17일</p>
            <div className="calender_detail">
              <div className="calender_detail_month">
                <h3>2022년 10월</h3>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="calender_detail_month">
                <h3>2022년 11월</h3>
                <table>
                  <thead>
                    <tr>
                      <th>일</th>
                      <th>월</th>
                      <th>화</th>
                      <th>수</th>
                      <th>목</th>
                      <th>금</th>
                      <th>토</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="calender_bottom">
              <img src="./img/detailPage/keyboard.svg" alt="키보드" />
              <span>날짜 지우기</span>
            </div>
          </section>
        </article>

        {/* <!-- Main Right --> */}

        <aside className="main_right">
          <div className="main_right_top">
            <h1>&#8361;782,076<span> /박</span></h1>
            <div className="main_right_inOut">
              <div className="main_right_in">
                <span>체크인</span>
                <span>2022. 10. 12.</span>
              </div>
              <div className="main_right_out">
                <span>체크아웃</span>
                <span>2022. 10. 17.</span>
              </div>
            </div>
            <div className="main_right_guest">
              <div className="main_right_guest_info">
                <span>인원</span>
                <span>게스트1명</span>
              </div>
              <div>
                <img
                  src="./img/detailPage/bottomDirection.svg"
                  alt="화살표 방향
              아래"
                />
              </div>
            </div>
            <button className="main_right_reservation_btn">예약하기</button>
            <p className="main_right_reservation_btn_words">
              예약 확정 전에는 요금이 청구되지 않습니다.
            </p>
            <div className="main_right_charge">
              <div className="main_right_charge_price">
                <div className="main_right_charge_price_underline">
                  &#8361;782,076 x 5박
                </div>
                <div>&#8361;3,910,380</div>
              </div>
              <div className="main_right_charge_commission">
                <div className="main_right_charge_commission_underline">
                  서비스 수수료
                </div>
                <div>&#8361;0</div>
              </div>
            </div>
            <div className="main_right_total">
              <div>총 합계</div>
              <div>&#8361;3,910,380</div>
            </div>
          </div>
          <div className="main_right_bottom">
            <img src="./img/detailPage/declare.svg" alt="신고하기" />
            <span>숙소 신고하기</span>
          </div>
        </aside>
      </main>
      
      <article id="variable">
        <section className="reviews">
          <h2>후기(아직)없음</h2>
          <div className="reviews_contents">
            <div className="reviews_contents_star">
              <img src="./img/detailPage/star.svg" alt="별표" />
              <p>
                이 호스트의 다른 숙소에 대한 후기가 765개 있습니다.
                <span className="reviews_contents_underline"
                  >다른 숙소 후기 보기</span
                >
              </p>
            </div>
            <div className="reviews_contents_reserve">
              <img src="./img/detailPage/globe.svg" alt="지구본" />
              <p>
                여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은
                <span className="reviews_contents_underline"
                  >에어비앤비의 게스트 환불 정책</span
                >에 따라 보호를 받습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="hosting">
          <h2>호스팅 지역</h2>
          <p>몰디브</p>
          <div className="hosting_map">
            <button></button>
            <div className="hosting_map_publicTransportationc">
              <input
                type="checkbox"
                id="hosting_map_publicTransportationc_check"
              />
              <span>대중교통</span>
            </div>
            <div className="hosting_map_plusMinus">
              <button>+</button>
              <button>-</button>
            </div>
            <div className="hosting_map_people">
              <img src="./img/variable/people.png" alt="사람" />
            </div>
            <div className="hosting_map_homeBox">
              <div className="hosting_map_home_background"></div>
              <div className="hosting_map_home">
                <img src="./img/variable/home.svg" alt="집" />
              </div>
            </div>
          </div>
        </section>

        <section id="host_intro">
          <div className="host_intro_header">
            <img
              src="https://a0.muscache.com/im/pictures/user/0ea3cd74-7ce9-4f59-bf57-334651d552c6.jpg?im_w=240"
              alt=""
            />
            <div className="host_intro_header_detail">
              <h2>호스트:Dorothy님</h2>
              <p>회원 가입일:2015년 10월</p>
            </div>
          </div>
          <div id="host_intro_detail">
            <div className="host_intro_detail">
              <div className="host_intro_detail_left">
                <div>
                  <img src="./img/variable/blackstar.svg" alt="별표" />
                  <span>후기 765개</span>
                </div>
                <div>
                  <img src="./img/variable/confirmation.svg" alt="본인 인증" />
                  <span>본인 인증 완료</span>
                </div>
              </div>
              <p>
                저는 1978년 이즈미르에서 태어났습니다. 관광 및 호텔 관리를 졸업한
                후, 하우스키핑부터 게스트 관계까지 관광 부문의 여러 부서에서
                일했습니다. 현재 저는 말리 관광 및 여행 LLC의 일원으로 A 그룹
                여행사인 LookBookHoliday의 고객 서비스와 에어비앤비 채널 관리를
                수행합니다. 1200개 이상의 직접 연락이…
                <span className="host_intro_detail_more">더 읽기</span>
              </p>
            </div>
            <div className="host_intro_detail_right">
              <span>언어:English, Türkçe</span>
              <span>응답률:66%</span>
              <span>응답 시간: 하루 이내</span>
              <button className="host_intro_detail_right_call">
                호스트에게 연락하기
              </button>
              <div className="host_intro_detail_right_security">
                <img src="./img/variable/security.svg" alt="보안" />
                <span
                  >안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
                  대화를 나누지 마세요.</span
                >
              </div>
            </div>
          </div>
        </section>
        
        <section id="checkList">
          <h2>알아두어야 할 사항</h2>
          <div className="checkList_contents">
            <div className="checkList_contents_rule">
              <h4>숙소 이용규칙</h4>
              <div>
                <img src="./img/variable/watch.svg" alt="시계" />
                <span>체크인:오후 3:00 이후</span>
              </div>
            </div>
            <div className="checkList_contents_health">
              <h4>건강과 안전</h4>
              <div className="checkList_contents_health_fumigator">
                <img src="./img/variable/blackstar.svg" alt="방역수칙" />
                <span className="checkList_contents_health_rule"
                  >에어비앤비 코로나19 방역 수칙을 준수하셔야 합니다.</span
                >
              </div>
              <div>
                <img src="./img/variable/alarm.svg" alt="일산화탄소 경보기" />
                <span>일산화탄소 경보기</span>
              </div>
              <div>
                <img src="./img/variable/fireAlarm.svg" alt="화재경보기" />
                <span>화재경보기</span>
              </div>
              <span className="checkList_contents_more">더 보기 </span>
            </div>
            <div className="checkList_contents_refund">
              <h4>환불 규칙</h4>
              <div>
                <span>9월 12일 전까지 무료로 취소하실 수 있습니다.</span>
              </div>
              <span className="checkList_contents_more">더 보기 </span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default DetailMain;