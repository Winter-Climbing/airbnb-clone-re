import React, { useState } from 'react';

import DetailImage from '../components/DetailPage/DetailImage';
import DetailMain from '../components/DetailPage/DetailMain';
import DetailFooter from '../components/DetailPage/DetailFooter';
import DetailPoP from '../components/DetailPage/DetailPoP';
import HeaderContainer from '../containers/detail/header/HeaderContainer';

const DetailPage = () => {

  const [pop, setPop] = useState(false)
  return (
    <div>
      <HeaderContainer></HeaderContainer>
      <DetailImage></DetailImage>
      <DetailMain></DetailMain>
      <DetailFooter></DetailFooter>
      {pop === false && <DetailPoP pop={pop} setFilter={setPop}/>}
    </div>
  );
};

export default DetailPage;