import React, { useState } from 'react';

// 컴포넌트

import MainNav from '../components/MainPage/MainNav';
import MainFooter from '../components/MainPage/MainFooter'
import MainFilter from '../components/MainPage/MainFilter';
import HeaderContainer from '../containers/home/header/HeaderContainer';
import MainContainer from '../containers/home/main/MainContainer'

// Data



const HomePage = (props) => {
  const [filter, setFilter] = useState(false)


  
  return (
    <div>
      <HeaderContainer/>
      <MainNav filter={filter} setFilter={setFilter} />
      <MainContainer/>
      <MainFooter></MainFooter>
      {filter === true && <MainFilter filter={filter} setFilter={setFilter}/>}
    </div>
  );
};

export default HomePage;