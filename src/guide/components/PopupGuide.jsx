import { useState } from 'react';
import { AlertDialog, CustomizedDialogs, Button } from '@/components/';

export default function PopupGuide() {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleConfirm = () => {
    console.log('확인 클릭됨!');
    setOpen(false);
    setOpenAlert(false);
  };
  return (
    <>
      <div className="guide-page__title">
        <h2>Popup</h2>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Alert</h3>
        </div>
        <div className="guide-page__box--cont">
          <Button variant="outlined" onClick={() => setOpenAlert(true)}>
            Open Alert
          </Button>
          <AlertDialog
            title="제목"
            open={openAlert}
            onClose={() => setOpenAlert(false)}
            onConfirm={handleConfirm}
            confirmText="닫기"
          >
            <div style={{ width: '150px' }}>저장이 완료되었습니다.</div>
          </AlertDialog>
        </div>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Bottom Sheet</h3>
        </div>
        <div className="guide-page__box--cont"></div>
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
            confirmText="저장"
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
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Floating Bar</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Snackbar</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
    </>
  );
}
