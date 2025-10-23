import Button from '../components/Button';

export default function ButtonGuide() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>퍼블 버튼 가이드</h2>
      <p>기본 버튼, Primary, Secondary, Disabled 상태</p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button label="Primary" type="primary" />
        <Button label="Secondary" type="secondary" />
        <Button label="Disabled" type="primary" disabled />
      </div>
    </div>
  );
}
