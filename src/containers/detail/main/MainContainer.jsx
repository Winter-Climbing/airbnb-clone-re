import React from 'react';
import styles from './MainContainer.module.css'
import MainTitleSection from '../../../components/DetailPage1/Main-top/MainTitleSection'
import MainWaitSection from '../../../components/DetailPage1/Main-top/MainWaitSection'
import MainAirCoverSection from '../../../components/DetailPage1/Main-top/MainAirCoverSection'
import MainTranslateSection from '../../../components/DetailPage1/Main-top/MainTranslateSection'
import MainLodgingPlace from '../../../components/DetailPage1/Main-top/MainLodgingPlace'
import MainConvenientFacilities from '../../../components/DetailPage1/Main-top/MainConvenientFacilities';
import MainCalender from '../../../components/DetailPage1/Main-top/MainCalender'
import MainAside from '../../../components/DetailPage1/Main-top/MainAside'
import MainReview from '../../../components/DetailPage1/Main-bottom/MainReview'
import MainHosting from '../../../components/DetailPage1/Main-bottom/MainHosting'
import MainHostIntro from '../../../components/DetailPage1/Main-bottom/MainHostIntro'
import MainRule from '../../../components/DetailPage1/Main-bottom/MainRule'

const MainContainer = () => {
  return (
    <>
      <main id={styles.main}>
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
        <aside className={styles.main_right}>
          <MainAside/>
        </aside>
      </main>
      <article id={styles.variable}>
        <MainReview></MainReview>
        <MainHosting></MainHosting>
        <MainHostIntro></MainHostIntro>
        <MainRule></MainRule>
      </article>
    </>
  );
};

export default MainContainer;