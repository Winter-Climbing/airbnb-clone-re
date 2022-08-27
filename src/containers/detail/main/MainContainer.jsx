import React from 'react';
import styles from './MainContainer.module.css'
import MainTitleSection from '../../../components/DetailPage1/Main/MainTitleSection'
import MainWaitSection from '../../../components/DetailPage1/Main/MainWaitSection'
import MainAirCoverSection from '../../../components/DetailPage1/Main/MainAirCoverSection'
import MainTranslateSection from '../../../components/DetailPage1/Main/MainTranslateSection'
import MainLodgingPlace from '../../../components/DetailPage1/Main/MainLodgingPlace'
import MainConvenientFacilities from '../../../components/DetailPage1/Main/MainConvenientFacilities';
import MainCalender from '../../../components/DetailPage1/Main/MainCalender'
import MainAside from '../../../components/DetailPage1/Main/MainAside'

const MainContainer = () => {
  return (
    <main id="main">
    {/* <!-- Main Left --> */}

      <article className={styles.main_left}>
        <MainTitleSection/>
        <MainWaitSection/>
        <MainAirCoverSection/>
        <MainTranslateSection/>
        <MainLodgingPlace/>
        <MainConvenientFacilities/>
        <MainCalender/>
      </article>
    {/* <!-- Main Right --> */}
      <MainAside/>
    </main>
  );
};

export default MainContainer;