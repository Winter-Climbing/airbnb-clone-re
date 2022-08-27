import React from 'react';
import { useState, useEffect, useRef } from "react";

const DetailPoP = (props) => {
  
    const [hideElement, setHideElement] = useState(false);
    const scrollRef = useRef(null);
  
    useEffect(() => {
      if (!scrollRef.current) return;
      window.addEventListener("scroll", yScrollEvent);
      return () => {
        window.removeEventListener("scroll", yScrollEvent);
      };
    }, [scrollRef.current]);
  
    const yScrollEvent = () => {
      const scroll = scrollRef.current.getBoundingClientRect();
      console.log(scroll);
      setHideElement(scroll.top <= -100);
    };

  return (
    <div>
      <div id="pop">
        <div class="pop_up">
          <div class="pop_up_list">
            <span>사진</span>
            <span>편의시설</span>
            <span>후기</span>
            <span>위치</span>
          </div>
          <div class="pop_up_priceBtn">
            <p><span>&#8361;780,957</span>/박</p>
            <button>예약하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPoP;