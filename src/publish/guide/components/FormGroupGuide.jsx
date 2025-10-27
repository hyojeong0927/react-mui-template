import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import {
  FormGroup,
  FormRow,
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
          <FormGroup
            onSubmit={handleSubmit}
            className="form-group"
            formTitle=""
          >
            {/* 이름 */}
            <FormRow
              label="Text Field"
              error={true}
              helperText="필수 입력입니다."
            >
              <BasicTextField
                label="이름"
                value={name}
                onChange={setName}
                placeholder="이름을 입력하세요"
              />
            </FormRow>

            {/* 선택 */}
            <FormRow label="Select" error={true} helperText="필수 입력입니다.">
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
            </FormRow>

            {/* 체크박스 */}
            <FormRow
              label="Checkbox"
              error={true}
              helperText="필수 입력입니다."
            >
              <BasicCheckboxGroup
                id="chk-group"
                label=""
                options={checkboxOptions}
                propValue={selectedValues}
                row={true}
                onChange={handleCheckboxChange}
              />
            </FormRow>

            {/* 라디오 */}
            <FormRow label="Radio" error={true} helperText="">
              <BasicRadioGroup
                id="radio-group"
                label=""
                options={radioOptions}
                propValue={radioValue}
                onChange={setRadioValue}
                direction="row"
              />
            </FormRow>

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
