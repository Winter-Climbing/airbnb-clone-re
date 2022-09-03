import { useState, useEffect, useRef } from "react";



import FooterContainer from '../containers/detail/footer/FooterContainer';
import HeaderContainer from '../containers/detail/header/HeaderContainer';
import ImageSectionContainer from '../containers/detail/ImageSection/ImageSectionContainer';
import MainContainer from '../containers/detail/main/MainContainer';
import PopContainer from '../containers/detail/pop/PopContainer';


const DetailPage = (props) => {

  const [scrollY, setScrollY] = useState(0);
  const [test, setTest] = useState(599);


  const listener = e => {
    setScrollY(window.pageYOffset);
  };


  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });




  
  return (
    <div>
      <HeaderContainer/>
      <ImageSectionContainer/>
      <MainContainer/>
      <FooterContainer/>
      {test < scrollY  && <PopContainer scrollY={scrollY}  />}
    </div>
  );
};

export default DetailPage;