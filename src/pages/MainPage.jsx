import React, { useState } from 'react';

// 컴포넌트
import MainHeader from '../components/MainPage/MainHeader';
import MainNav from '../components/MainPage/MainNav';
import MainFooter from '../components/MainPage/MainFooter'
import MainFilter from '../components/MainPage/MainFilter';
import JsonMain from '../components/MainPage/JsonMain';

// Data



const MainPage = (props) => {
  const [filter, setFilter] = useState(false)


  
  return (
    <div>
      <MainHeader/>
      <MainNav filter={filter} setFilter={setFilter} />
      <JsonMain></JsonMain>
      <MainFooter></MainFooter>
      {filter === true && <MainFilter filter={filter} setFilter={setFilter}/>}
    </div>
  );
};

export default MainPage;