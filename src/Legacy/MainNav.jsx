import MN from '../../css/mainPage/nav.module.css'
import NavData from '../../lib/NavData.json'

// import '../../css/mainPage/mainPage.module.css'

const MainNav = (props) => {

  return (
    <div>
      <nav>
      <div className="nav_flex">
        <div className="navBtn_flex">
          <div className="nav_left_btnSpace">
            <button className="nav_left_btnSpace_btn">
              <img src="./img/leftBtn.svg" alt="왼쪽버튼" />
            </button>
          </div>
          <div className="nav_right_btnSpace">
            <button className="nav_right_btnSpace_btn">
              <img src="./img/rightBtn.svg" alt="오른쪽버튼" />
            </button>
          </div>
          {
        NavData.map((NavData) => {
          return (
          <button key={NavData.id} className="nav_btn">
            <div className="nav_btn-title">
              <img
                src={NavData.img}
                alt="아이콘"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">{NavData.title}</p>
            </div>
          </button>
          )
        })
      }
        </div>
        <button className={MN.nav_filter} onClick={() => {props.setFilter(true)}}>
          <img className='nav_filter_img' src="./img/filter.svg" alt="필터이미지" />
          <p>필터</p>
        </button>
      </div>
    </nav>
    </div>
  );
};

export default MainNav;