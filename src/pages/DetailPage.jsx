import React, { useState } from 'react';



import DetailPoP from '../components/DetailPage/DetailPoP';
import FooterContainer from '../containers/detail/footer/FooterContainer';
import HeaderContainer from '../containers/detail/header/HeaderContainer';
import ImageSectionContainer from '../containers/detail/ImageSection/ImageSectionContainer';
import MainContainer from '../containers/detail/main/MainContainer';

const DetailPage = () => {

  const [pop, setPop] = useState(false)
  
  return (
    <div>
      <HeaderContainer/>
      <ImageSectionContainer/>
      <MainContainer/>
      <FooterContainer/>
      {pop === false && <DetailPoP pop={pop} setFilter={setPop}/>}
    </div>
  );
};

export default DetailPage;