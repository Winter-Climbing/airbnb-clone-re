import React, { useState } from 'react';



import FooterContainer from '../containers/detail/footer/FooterContainer';
import HeaderContainer from '../containers/detail/header/HeaderContainer';
import ImageSectionContainer from '../containers/detail/ImageSection/ImageSectionContainer';
import MainContainer from '../containers/detail/main/MainContainer';
import PopContainer from '../containers/detail/pop/PopContainer';

const DetailPage = () => {

  const [pop, setPop] = useState(false)
  
  return (
    <div>
      <HeaderContainer/>
      <ImageSectionContainer/>
      <MainContainer/>
      <FooterContainer/>
      {pop === false && <PopContainer pop={pop} setFilter={setPop}/>}
    </div>
  );
};

export default DetailPage;