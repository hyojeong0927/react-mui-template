import { useState } from 'react';
import { Agree, Button, FormGroup } from '@/components/';
import PrivacyContent from '../contents/PrivacyContent';
import ServiceContent from '../contents/ServiceContent';
import MarketingContent from '../contents/MarketingContent';

export default function AgreeGuide() {
  const [selected, setSelected] = useState([]);

  const options = [
    {
      value: 'privacy',
      label: '개인정보 수집 및 이용 동의 (필수)',
      children: 'privacy',
      required: true,
    },
    {
      value: 'service',
      label: '서비스 이용 약관 동의 (필수)',
      children: 'service',
      required: true,
    },
    {
      value: 'marketing',
      label: '마케팅 정보 수신 동의 (선택)',
      children: 'marketing',
    },
  ];

  const contents = {
    privacy: <PrivacyContent />,
    service: <ServiceContent />,
    marketing: <MarketingContent />,
  };

  const handleSubmit = e => {
    e.preventDefault();
    const required = options.filter(o => o.required).map(o => o.value);
    const missing = required.filter(v => !selected.includes(v));

    if (missing.length > 0) {
      alert('필수 약관에 모두 동의해주세요.');
      return;
    }
    alert('제출 완료!');
  };

  return (
    <>
      <div className="guide-page__title">
        <h2>Agree Form</h2>
      </div>
      <FormGroup onSubmit={handleSubmit}>
        <Agree
          options={options}
          value={selected}
          onChange={setSelected}
          subtitle="아래 약관을 확인하고 동의해주세요."
          children={<p>※ 모든 항목은 필수 선택 사항입니다.</p>}
          contents={contents}
          showSelectAll={true}
          selectAllLabel="모두 동의"
          defaultOpen="first" // 'first', 'all', 'none'
        />
        <Button type="submit" style={{ marginTop: '20px' }}>
          제출하기
        </Button>
      </FormGroup>
    </>
  );
}
