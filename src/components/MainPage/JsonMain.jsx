import React from 'react';
import LodgingData from "../../LodgingData.json"
import { Link } from "react-router-dom";

const JsonMain = () => {
  <Link to="/detailpage"></Link>

  return (
    <div>
      <main>
        <article id="article">
      {
        LodgingData.map((index, i) => {
            return (
              <div key={i}>
                <Link to="/detailpage">
                  <section className="lodging">
                    <div className="lodging_img">
                      <img className='lodging_img_objectfit' src={index.background} alt="몰디브사진" />
                      <button className="lodging_img_heartBtn">
                        <img
                          src="./img/favorite_border.svg"
                          alt="하트아이콘"
                          className="heartIcon"
                        />
                      </button>
                      <button className="lodging_rightBtn">&#62;</button>
                    </div>
                    <div className="lodging_text">
                      <div className="lodging_text_title">
                        <h2>{index.title}</h2>
                        <span className="lodging_text_title_star">
                          <img className='lodging_text_title_star_img' src="./img/star.svg" alt="별표" />{index.star}
                        </span>
                      </div>
                      <p>{index.distance}</p>
                      <p className="lodging_text_bottom">{index.date}</p>
                      <p><span className="lodging_text_price">&#8361;{index.price}</span> / 박</p>
                    </div>
                  </section>
                </Link>
              </div>
            )  
          })
        }
        </article>
      </main>
    </div>      
  );
};

export default JsonMain;