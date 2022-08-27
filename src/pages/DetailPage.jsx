import React, { useState } from 'react';


import DetailMain from '../components/DetailPage/DetailMain';
import DetailFooter from '../components/DetailPage/DetailFooter';
import DetailPoP from '../components/DetailPage/DetailPoP';
import HeaderContainer from '../containers/detail/header/HeaderContainer';
import ImageSectionContainer from '../containers/detail/ImageSection/ImageSectionContainer';

const DetailPage = () => {

  const [pop, setPop] = useState(false)
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <ImageSectionContainer></ImageSectionContainer>
      <DetailMain></DetailMain>
      <DetailFooter></DetailFooter>
      {pop === false && <DetailPoP pop={pop} setFilter={setPop}/>}
    </div>
  );
};

export default DetailPage;