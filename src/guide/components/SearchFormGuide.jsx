import { useState } from 'react';
import {
  SearchForm,
  FormRow,
  BasicTextField,
  BasicSelect,
} from '@/components/';

export default function SearchFormGuide() {
  const [choice, setChoice] = useState('');
  const [phone01, setPhone01] = useState('');
  const [phone02, setPhone02] = useState('');

  return (
    <>
      <div className="guide-page__title">
        <h2>Search</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Default</h3>
        </div>
        <div className="guide-page__box--cont">
          <SearchForm
            button={true}
            onSubmit={() => {
              console.log('검색 실행!');
            }}
            searchBtnId="search"
          >
            <FormRow>
              <BasicTextField
                id="name"
                label=""
                placeholder="검색어를 입력하세요"
              />
            </FormRow>

            <FormRow title="복합" required inline>
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
                propValue={phone01}
                onChange={setPhone01}
                placeholder="첫번째"
                error={!phone01}
                required
              />

              <BasicTextField
                id="phone-second"
                propValue={phone02}
                onChange={setPhone02}
                placeholder="마지막"
                error={!phone02}
                required
              />
            </FormRow>
          </SearchForm>
        </div>
      </div>
    </>
  );
}
