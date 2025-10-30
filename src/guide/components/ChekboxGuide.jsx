import { useState } from 'react';
import { BasicCheckbox, CheckboxGroup } from '@/components';

export default function CheckboxGuide() {
  const [agree, setAgree] = useState(false);
  const [selectedValues, setSelectedValues] = useState(['b']);
  const [selectedAllValues, setSelectedAllValues] = useState(['a']);
  const [hasError, setHasError] = useState(false);

  const options = [
    { label: '옵션 A', value: 'a' },
    { label: '옵션 B', value: 'b' },
    { label: '옵션 C', value: 'c' },
  ];
  const handleChange = vals => {
    setSelectedValues(vals);
    setHasError(vals.length === 0);
  };
  return (
    <>
      <div className="guide-page__title">
        <h2>Checkbox</h2>
      </div>
      {/* 기본 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>기본 체크박스</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicCheckbox
            id="agree"
            label="약관에 동의합니다"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          />
        </div>
      </div>

      {/* 비활성화 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>비활성화 상태</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicCheckbox label="선택 불가" disabled checked />
        </div>
      </div>
      <hr style={{ marginBottom: 20 }} />

      {/* 그룹 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>그룹 체크박스 + 가로</h3>
        </div>
        <div className="guide-page__box--cont">
          <CheckboxGroup
            id="chk-group"
            label="항목 선택"
            options={options}
            propValue={selectedValues}
            row={true}
            error={hasError}
            onChange={handleChange}
            helperText={
              hasError
                ? '최소 하나를 선택하세요.'
                : '여러 항목을 선택할 수 있습니다.'
            }
          />
          <div style={{ marginTop: 10 }}>
            선택된 값: {selectedValues.join(', ') || '없음'}
          </div>
        </div>
      </div>
      <hr style={{ marginBottom: 20 }} />

      {/* 전체 선택 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>전체 선택 체크박스 + 세로</h3>
        </div>
        <div className="guide-page__box--cont">
          <CheckboxGroup
            id="chk-group"
            label="항목 선택"
            options={options}
            propValue={selectedAllValues}
            onChange={vals => setSelectedAllValues(vals)}
            includeSelectAll
          />
          <div style={{ marginTop: 10 }}>
            선택된 값: {selectedAllValues.join(', ') || '없음'}
          </div>
        </div>
      </div>
    </>
  );
}
