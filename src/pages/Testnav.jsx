import NavData from '../lib/NavData.json'
import styles from './Nav.module.css'

const TestNav = () => {

  
  return (
    <>
      <div className={styles.navBtn_flex}>
        {
          NavData.map((NavData) => {
            return (
            <button key={NavData.id} className={styles.nav_btn}>
              <div className={styles.nav_btn_title}>
                <img
                  src={NavData.img}
                  alt="아이콘"
                  className={styles.nav_btn_title_img}
                />
                <p className={styles.nav_btn_title_p}>{NavData.title}</p>
              </div>
            </button>
            )
          })
        }
      </div>
    </>
  );
};

export default TestNav;