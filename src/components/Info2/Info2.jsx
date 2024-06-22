
import React from 'react';
import styles from './Info2.module.css';
import PopUp from '../PopUp/PopUp';

const Info2 = ({selectedAlgorithm}) => {

  return (
    <>
 
    <div className={styles['info2-container']}>
   <div className={styles['algo-name-wrapper']}>
    <div className={styles['algo-name']}>
      <PopUp selectedAlgorithm={selectedAlgorithm}>

      </PopUp>
    </div>
    </div>
    
      <div className="wrapper">
      <div className={styles['node']}>
        <span>Start Node:</span>
        <div className={`${styles['color-indicator']} ${styles['start-node']}`}></div>
      </div>
      <div className={styles['node']}>
        <span>End Node:</span>
        <div className={`${styles['color-indicator']} ${styles['end-node']}`}></div>
      </div>
      </div>

      <div className="wrapper">

     
      <div className={styles['node']}>
        <span>Shortest Path:</span>
        <div className={`${styles['color-indicator']} ${styles['shortest-path']}`}></div>
      </div>
      <div className={styles['node']}>
        <span>Wall:</span>
        <div className={`${styles['color-indicator']} ${styles['wall']}`}></div>
      </div>
      </div>

      <div className="wrapper">

      <div className={styles['node']}>
        <span>Visited Node:</span>
        <div className={`${styles['color-indicator']} ${styles['visited-node']}`}></div>
      </div>
      <div className={styles['node']}>
        <span>Un-visited Node:</span>
        <div className={`${styles['color-indicator']} ${styles['un-visited-node']}`}></div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Info2;


