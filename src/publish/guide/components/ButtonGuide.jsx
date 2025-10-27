import Button from '@/publish/components/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ButtonGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>Button</h2>
      </div>
      <div
        className="guide-page__box"
        style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
      >
        <Button variant="primary">기본 버튼</Button>
        <Button variant="secondary">보조 버튼</Button>
        <Button variant="outline">외곽선 버튼</Button>
        <Button variant="danger">위험 버튼</Button>

        <Button size="sm">작은 버튼</Button>
        <Button variant="primary" loading>
          로딩중
        </Button>
        <Button disabled>비활성화</Button>
        <Button size="lg" fullWidth>
          큰 버튼 (풀사이즈)
        </Button>
        {/* 왼쪽 아이콘 */}
        <Button iconLeft={<AddIcon />}>추가</Button>

        {/* 오른쪽 아이콘 */}
        <Button iconRight={<DeleteIcon />}>삭제</Button>

        {/* 양쪽 아이콘 */}
        <Button iconLeft={<AddIcon />} iconRight={<DeleteIcon />}>
          추가 / 삭제
        </Button>
      </div>
    </>
  );
}
