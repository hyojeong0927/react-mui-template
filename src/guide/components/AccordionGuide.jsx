import { AccordionDefault } from '@/components/';

export default function AccordionGuide() {
  const data = [
    { id: '01', title: 'accordion1', content: '아코디언 콘텐츠1' },
    { id: '02', title: 'accordion2', content: '아코디언 콘텐츠2' },
    { id: '03', title: 'accordion3', content: '아코디언 콘텐츠3' },
  ];
  return (
    <>
      <div className="guide-page__title">
        <h2>Accordion</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Default</h3>
        </div>
        <div className="guide-page__box--cont">
          <AccordionDefault accValue={data} />
        </div>
      </div>
    </>
  );
}
