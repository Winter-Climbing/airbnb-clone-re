import React, { useState } from 'react';



import DetailFooter from '../components/DetailPage/DetailFooter';
import DetailPoP from '../components/DetailPage/DetailPoP';
import HeaderContainer from '../containers/detail/header/HeaderContainer';
import ImageSectionContainer from '../containers/detail/ImageSection/ImageSectionContainer';
import MainContainer from '../containers/detail/main/MainContainer';

const DetailPage = () => {

  const [pop, setPop] = useState(false)
  
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <ImageSectionContainer></ImageSectionContainer>
      <MainContainer/>
      <DetailFooter></DetailFooter>
      {pop === false && <DetailPoP pop={pop} setFilter={setPop}/>}
    </div>
  );
};

export default DetailPage;