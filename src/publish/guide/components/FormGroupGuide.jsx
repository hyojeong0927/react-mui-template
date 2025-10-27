import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import {
  FormGroup,
  BasicTextField,
  BasicCheckboxGroup,
  BasicRadioGroup,
  BasicSelect,
  Button,
} from '@/publish/components';

export default function FormGroupGuide() {
  // 상태 초기값 설정
  const [name, setName] = useState('');
  const [choice, setChoice] = useState('');
  const [selectedValues, setSelectedValues] = useState(['opt1']);
  const [radioValue, setRadioValue] = useState('radio2');
  const [hasError, setHasError] = useState(false);

  // 옵션 정의
  const checkboxOptions = [
    { value: 'opt1', label: '옵션 1' },
    { value: 'opt2', label: '옵션 2' },
    { value: 'opt3', label: '옵션 3' },
  ];

  const radioOptions = [
    { value: 'radio1', label: '라디오 1' },
    { value: 'radio2', label: '라디오 2' },
  ];

  // 체크박스 상태 변경
  const handleCheckboxChange = values => {
    setSelectedValues(values);
    setHasError(values.length === 0);
  };

  // 폼 제출
  const handleSubmit = e => {
    e.preventDefault();
    console.log('폼 제출!', { name, choice, selectedValues, radioValue });
  };

  return (
    <div className="guide-page">
      <div className="guide-page__title">
        <h2>Form Group</h2>
      </div>

      <Card>
        <CardHeader title="입력폼" />
        <CardContent>
          <FormGroup onSubmit={handleSubmit} className="form-group">
            {/* 이름 */}
            <div className="form-row">
              <BasicTextField
                label="이름"
                value={name}
                onChange={setName}
                placeholder="이름을 입력하세요"
              />
            </div>

            {/* 선택 */}
            <div className="form-row">
              <BasicSelect
                label="선택"
                value={choice}
                options={[
                  { value: '', label: '선택' },
                  { value: 'option1', label: '옵션 1' },
                  { value: 'option2', label: '옵션 2' },
                ]}
                onChange={setChoice}
              />
            </div>

            {/* 체크박스 */}
            <div className="form-row">
              <BasicCheckboxGroup
                id="chk-group"
                label="항목 선택"
                options={checkboxOptions}
                propValue={selectedValues}
                row={true}
                error={hasError}
                onChange={handleCheckboxChange}
                helperText={
                  hasError
                    ? '최소 하나를 선택하세요.'
                    : '여러 항목을 선택할 수 있습니다.'
                }
              />
            </div>

            {/* 라디오 */}
            <div className="form-row">
              <BasicRadioGroup
                id="radio-group"
                label="정렬 방향"
                options={radioOptions}
                propValue={radioValue}
                onChange={setRadioValue}
                direction="row"
                error={false}
                helperText="한 가지 옵션만 선택 가능합니다."
              />
            </div>

            {/* 제출 버튼 */}
            <Button type="submit" variant="primary">
              제출
            </Button>
          </FormGroup>
        </CardContent>
      </Card>
    </div>
  );
}
