import { Badges } from '@/components/';
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>Badge</h2>
      </div>
      {/* 아이콘만 */}
      <Badges count={5} color="secondary" icon={<MailIcon />} />

      {/* 텍스트 포함 */}
      <Badges count={120} color="error">
        알림
      </Badges>
    </>
  );
}
