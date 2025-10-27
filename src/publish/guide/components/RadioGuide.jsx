import { useState } from 'react';
import { BasicRadioGroup } from '@/publish/components/';

export default function RadioGuide() {
  const [selected, setSelected] = useState('column');
  const [error, setError] = useState(false);

  const handleChange = val => {
    setSelected(val);
    setError(val === '');
  };

  const options = [
    { label: '가로 배치', value: 'row', disabled: true },
    { label: '세로 배치', value: 'column' },
  ];

  return (
    <>
      <div className="guide-page__title">
        <h2>Radio</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>정렬 방향 선택 + 가로</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicRadioGroup
            id="direction"
            label="정렬 방향"
            options={options}
            propValue={selected}
            onChange={handleChange}
            direction="row"
            error={error}
            helperText={
              error
                ? '하나를 선택해야 합니다.'
                : '한 가지 옵션만 선택 가능합니다.'
            }
          />
        </div>
      </div>
      <hr style={{ marginBottom: 20 }} />
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>정렬 방향 선택 + 세로</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicRadioGroup
            id="direction-vertical"
            label="정렬 방향"
            options={options}
            propValue={selected}
            onChange={handleChange}
            direction="column"
            error={error}
            helperText={
              error
                ? '하나를 선택해야 합니다.'
                : '한 가지 옵션만 선택 가능합니다.'
            }
          />
        </div>
      </div>
    </>
  );
}
