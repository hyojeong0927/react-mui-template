import Button from '@/publish/components/Button';

export default function ButtonGuide() {
  return (
    <>
      버튼
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="primary">기본 버튼</Button>
        <Button variant="secondary">보조 버튼</Button>
        <Button variant="outline">외곽선 버튼</Button>
        <Button variant="danger">위험 버튼</Button>

        <Button size="sm">작은 버튼</Button>
        <Button size="lg" fullWidth>
          큰 버튼 (풀사이즈)
        </Button>

        <Button disabled>비활성화</Button>
      </div>
    </>
  );
}
