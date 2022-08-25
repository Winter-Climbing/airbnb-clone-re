import React from 'react';
import styles from './MainContainer.module.css'
import Main from '../../../components/HomePage/Main/Main';

const MainContainer = () => {

  return (
    <div>
      <main>
        <article id={styles.article}>
          <Main></Main>
        </article>
      </main>
    </div>      
  );
};

export default MainContainer;