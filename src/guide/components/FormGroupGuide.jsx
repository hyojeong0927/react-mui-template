import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import {
  FormGroup,
  FormRow,
  BasicTextField,
  CheckboxGroup,
  BasicRadioGroup,
  BasicSelect,
  Button,
} from '@/components';

export default function FormGroupGuide() {
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [choice, setChoice] = useState('');
  const [phone01, setPhone01] = useState('');
  const [phone02, setPhone02] = useState('');
  const [selectedValues, setSelectedValues] = useState(['opt1']);
  const [radioValue, setRadioValue] = useState('radio2');

  const checkboxOptions = [
    { value: 'opt1', label: '옵션 1' },
    { value: 'opt2', label: '옵션 2' },
    { value: 'opt3', label: '옵션 3' },
  ];

  const radioOptions = [
    { value: 'radio1', label: '라디오 1' },
    { value: 'radio2', label: '라디오 2' },
  ];

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
          <FormGroup onSubmit={handleSubmit} legend="입력폼">
            <FormRow title="이름" required>
              <BasicTextField
                id="name"
                label=""
                propValue={name}
                onChange={setName}
                placeholder="이름을 입력하세요"
                required
                error={!name}
                helperText={!name ? '필수 입력입니다.' : ''}
              />
            </FormRow>
            <FormRow title="비밀번호" required>
              <BasicTextField
                id="pw"
                label=""
                type="password"
                propValue={pw}
                onChange={setPw}
                placeholder="비밀번호 입력"
                required
                error={!pw}
                helperText={!pw ? '필수 입력입니다.' : ''}
              />
            </FormRow>
            <FormRow title="연락처" required inline>
              <BasicSelect
                id="choice"
                label=""
                propValue={choice}
                onChange={setChoice}
                options={[
                  { value: '', label: '선택' },
                  { value: 'option1', label: '옵션 1' },
                  { value: 'option2', label: '옵션 2' },
                ]}
                error={!choice}
                helperText={!choice ? '필수 입력입니다.' : ''}
              />
              <BasicTextField
                id="phone-first"
                label=""
                propValue={phone01}
                onChange={setPhone01}
                placeholder="첫번째"
                required
                error={!phone01}
              />
              <BasicTextField
                id="phone-second"
                label=""
                propValue={phone02}
                onChange={setPhone02}
                placeholder="마지막"
                required
                error={!phone02}
              />
            </FormRow>

            <FormRow title="체크박스">
              <CheckboxGroup
                id="chk-group"
                label=""
                options={checkboxOptions}
                propValue={selectedValues}
                onChange={setSelectedValues}
                row
                error={selectedValues.length === 0}
                helperText={
                  selectedValues.length === 0
                    ? '하나 이상 선택해야 합니다.'
                    : ''
                }
              />
            </FormRow>

            <FormRow title="라디오 선택">
              <BasicRadioGroup
                id="radio-group"
                label=""
                options={radioOptions}
                propValue={radioValue}
                onChange={setRadioValue}
                row
                error={!radioValue}
                helperText={!radioValue ? '하나를 선택해야 합니다.' : ''}
              />
            </FormRow>

            <Button type="submit" variant="primary">
              제출
            </Button>
          </FormGroup>
        </CardContent>
      </Card>
    </div>
  );
}
