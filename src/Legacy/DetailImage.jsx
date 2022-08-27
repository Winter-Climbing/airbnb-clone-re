import React from 'react';


const DetailImage = () => {
  return (
    <div>
      <article>
        <section className="image_title">
          <h1>
            <img src="./img/translate.svg" alt="번역" /> 아다란 클럽 Rannalhi,
            몰디브, 워터 방갈로
          </h1>
          <div className="image_title_social">
            <span>몰디브</span>
            <div className="image_title_social_btn">
              <div className="image_title_social_btn_sharing">
                <img src="/img/sharing.svg" alt="공유" />
                <div>공유하기</div>
              </div>
              <div className="image_title_social_btn_heart">
                <img src="./img/heart.svg" alt="하트" />
                <div>저장</div>
              </div>
            </div>
          </div>
        </section>
        <section id="images">
          <div className="images_header"></div>
          <div className="images_column_left">
            <div className="images_first"></div>
            <div className="images_third"></div>
          </div>
          <div className="images_column_right">
            <div className="images_second"></div>
            <div className="images_fourth"></div>
          </div>
          <button className="images_btn">
            <img src="./img/allBtn.svg" alt="사진모두보기" />
            <div>사진 모두 보기</div>
          </button>
        </section>
      </article>
    </div>
  );
};

export default DetailImage;