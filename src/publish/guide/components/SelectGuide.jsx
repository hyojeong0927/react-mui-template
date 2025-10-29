import { BasicSelect } from '@/publish/components/';

export default function SelectGuide() {
  const options = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지' },
  ];
  return (
    <>
      <div className="guide-page__title">
        <h2>Select</h2>
      </div>

      {/* 기본 선택 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>기본 선택</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicSelect
            id="default"
            label=""
            options={options}
            propValue="apple"
          />
        </div>
      </div>

      {/* 필수 선택 + 에러 메시지 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>필수 선택 + 에러</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicSelect
            id="error"
            label="과일"
            options={options}
            propValue=""
            error
            helperText="과일을 반드시 선택해주세요."
          />
        </div>
      </div>

      {/* 비활성화 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>비활성화 상태</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicSelect
            id="disable"
            label=""
            options={options}
            propValue="banana"
            disabled
          />
        </div>
      </div>
    </>
  );
}
