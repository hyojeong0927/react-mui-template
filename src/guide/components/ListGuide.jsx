import { MixedList } from '@/components';

export default function ListGuide() {
  const data1 = ['Inbox', 'Drafts', 'Spam'];
  const data2 = [
    { term: 'HTML', desc: 'Markup language' },
    { term: 'CSS', desc: 'Style language' },
  ];
  return (
    <>
      <div className="guide-page__title">
        <h2>List</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>ul</h3>
        </div>
        <div className="guide-page__box--cont">
          <MixedList component="ul" listValue={data1} />
        </div>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>ol</h3>
        </div>
        <div className="guide-page__box--cont">
          <MixedList component="ol" listValue={data1} />
        </div>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>dl</h3>
        </div>
        <div className="guide-page__box--cont">
          <MixedList component="dl" listValue={data2} />
        </div>
      </div>
    </>
  );
}
