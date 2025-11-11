import { Title, Button } from '@/components';
import '@/styles/components/etc/title.scss';

export default function TitleGuide() {
  const handleClick = () => {
    console.log('버튼 클릭!');
  };
  return (
    <>
      <div className="guide-page__title">
        <h2>Title</h2>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>버튼 없는 타이틀</h3>
        </div>
        <div className="guide-page__box--cont">
          {/* <Title titleText="h1 페이지 타이틀" level="h1" /> */}
          <Title titleText="h4 페이지 타이틀" level="h4" />
          <br />
          <Title titleText="h5 페이지 타이틀" level="h5" />
        </div>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>버튼 있는 타이틀</h3>
        </div>
        <div className="guide-page__box--cont">
          <Title
            titleText="h4 버튼 있는 타이틀"
            level="h4"
            align="between"
            titleBtn={<Button onClick={handleClick}>추가</Button>}
          />
          <br />
          <Title
            titleText="h5 자동으로 버튼 생성됨"
            level="h5"
            align="between"
            titleBtn="등록"
          />
        </div>
      </div>
    </>
  );
}
