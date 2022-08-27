import React from 'react';
import styles from './PopContainer.module.css'
import Pop from '../../../components/DetailPage1/Pop/Pop'

const PopContainer = () => {
  return (
    <div id={styles.pop}>
      <Pop></Pop>
    </div>
  );
};

export default PopContainer;