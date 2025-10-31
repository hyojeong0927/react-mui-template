import { MixedList } from '@/components';

export default function ListGuide() {
  const dataUl = ['ul-item-01', 'ul-item-02', 'ul-item-03'];
  const dataOl = ['ol-item-01', 'ol-item-02', 'ol-item-03'];
  const dataDl = [
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
          <MixedList component="ul" listValue={dataUl} />
        </div>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>ol</h3>
        </div>
        <div className="guide-page__box--cont">
          <MixedList component="ol" listValue={dataOl} />
        </div>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>dl</h3>
        </div>
        <div className="guide-page__box--cont">
          <MixedList component="dl" listValue={dataDl} />
        </div>
      </div>
    </>
  );
}
