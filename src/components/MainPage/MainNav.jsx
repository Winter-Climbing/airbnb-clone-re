import MN from '../../css/mainPage/nav.module.css'

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
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
                alt="섬아이콘"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">섬아이콘</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
              src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
              alt="국립공원" className="nav_btn-title-img" />
              <p className="nav_btn-title-p">국립공원</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                alt="통나무집"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">통나무집</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                alt="기상천외한 숙소"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">기상천외한 숙소</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                alt="해변근처"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">해변근처</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
                alt="초소형 주택"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">초소형 주택</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
                alt="디자인"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">디자인</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
                alt="캠핑장"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">캠핑장</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
                alt="A자형 주택"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">A자형 주택</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
                alt="호숫가"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">호숫가</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
                alt="북극"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">북극</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                alt="멋진 수영장"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">멋진 수영장</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
                alt="동굴"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">동굴</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
                alt="서핑"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">서핑</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
                alt="B&B"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">B&B</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
                alt="복도 주택"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">복도 주택</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
                alt="열대 지역"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">열대 지역</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                alt="한적한 시골"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">한적한 시골</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
                alt="Luxe"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">Luxe</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                alt="농장"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">농장</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg"
                alt="셰어하우스"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">셰어하우스</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
                alt="캐슬"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">캐슬</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg"
                alt="료칸"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">료칸</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
                alt="저택"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">저택</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
                alt="상징적 도시"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">상징적 도시</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/8f7740f0-4854-4057-8082-e098649cf689.jpg"
                alt="객잔"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">객잔</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
                alt="돔하우스"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">돔하우스</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
                alt="골프장"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">골프장</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                alt="최고의 전망"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">최고의 전망</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                alt="해변 바로 앞"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">해변 바로 앞</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg"
                alt="캠핑카"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">캠핑카</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                alt="유서 깊은 주택"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">유서 깊은 주택</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg"
                alt="풍차"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">풍차</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg"
                alt="와인 농장"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">와인 농장</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg"
                alt="키클라데스 주택"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">키클라데스 주택</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg"
                alt="보트"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">보트</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
                alt="스키"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">스키</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg"
                alt="전문가급 주방"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">전문가급 주방</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg"
                alt="컨테이너하우스"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">컨테이너하우스</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg"
                alt="마차"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">마차</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg"
                alt="창작 공간"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">창작 공간</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg"
                alt="민수"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">민수</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
                alt="트리하우스"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">트리하우스</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg"
                alt="카사 파르티쿨라르"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">카사 파르티쿨라르</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
                alt="사막"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">사막</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg"
                alt="유르트"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">유르트</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg"
                alt="타워"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">타워</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg"
                alt="헛간"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">헛간</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg"
                alt="속세를 벗어난 숙소"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">속세를 벗어난 숙소</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg"
                alt="하우스보트"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">하우스보트</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg"
                alt="그랜드 피아노"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">그랜드 피아노</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg"
                alt="트룰로"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">트룰로</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg"
                alt="리아드"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">리아드</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg"
                alt="담무소"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">담무소</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg"
                alt="스키를 탄 채로 출입 가능"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">스키를 탄 채로 출입 가능</p>
            </div>
          </button>
          <button className="nav_btn">
            <div className="nav_btn-title">
              <img
                src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
                alt="호수"
                className="nav_btn-title-img"
              />
              <p className="nav_btn-title-p">호수</p>
            </div>
          </button>
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