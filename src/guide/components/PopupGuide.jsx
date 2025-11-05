import { useState } from 'react';
import { CustomizedDialogs, Button } from '@/components/';

export default function PopupGuide() {
  const [open, setOpen] = useState(false);
  const handleConfirm = () => {
    console.log('확인 클릭됨!');
    setOpen(false); // 닫기
  };
  return (
    <>
      <div className="guide-page__title">
        <h2>Popup</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Dialog</h3>
        </div>
        <div className="guide-page__box--cont">
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Open dialog
          </Button>
          <CustomizedDialogs
            modalTitle="제목"
            modalSize="lg"
            scroll="paper"
            open={open}
            onClose={() => setOpen(false)}
            onConfirm={handleConfirm}
            confirmText="삭제"
            cancelText="취소"
          >
            <div
              style={{ width: '500px', height: '1000px', background: '#eee' }}
            >
              매우 길어지는 내용...
            </div>
          </CustomizedDialogs>
        </div>
      </div>
    </>
  );
}
