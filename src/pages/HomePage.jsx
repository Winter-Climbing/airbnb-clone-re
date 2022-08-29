import React, { useState } from 'react';

// 컴포넌트

import MainFilter from '../components/HomePage/Filter/MainFilter';
import HeaderContainer from '../containers/home/header/HeaderContainer';
import MainContainer from '../containers/home/main/MainContainer'
import FooterContainer from '../containers/home/footer/FooterContainer';
import NavContainer from '../containers/home/nav/NavContainer';

// Data



const HomePage = (props) => {
  const [filter, setFilter] = useState(false)


  
  return (
    <div>
      <HeaderContainer/>
      <NavContainer filter={filter} setFilter={setFilter} />
      <MainContainer/>
      <FooterContainer></FooterContainer>
      {filter === true && <MainFilter filter={filter} setFilter={setFilter}/>}
    </div>
  );
};

export default HomePage;