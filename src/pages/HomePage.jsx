import React, { useState } from 'react';

// 컴포넌트

import MainNav from '../components/MainPage/MainNav';
import MainFilter from '../components/MainPage/MainFilter';
import HeaderContainer from '../containers/home/header/HeaderContainer';
import MainContainer from '../containers/home/main/MainContainer'
import FooterContainer from '../containers/home/footer/FooterContainer';

// Data



const HomePage = (props) => {
  const [filter, setFilter] = useState(false)


  
  return (
    <div>
      <HeaderContainer/>
      <MainNav filter={filter} setFilter={setFilter} />
      <MainContainer/>
      <FooterContainer></FooterContainer>
      {filter === true && <MainFilter filter={filter} setFilter={setFilter}/>}
    </div>
  );
};

export default HomePage;