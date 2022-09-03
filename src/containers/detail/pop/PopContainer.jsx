import React from 'react';
import styles from './PopContainer.module.css'
import Pop from '../../../components/DetailPage1/Pop/Pop'

const PopContainer = (props) => {



  return (
    <div id={styles.pop}>
      <Pop scrollY={props.scrollY} />
    </div>
  );
};

export default PopContainer;