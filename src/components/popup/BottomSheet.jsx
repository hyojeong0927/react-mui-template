import { useEffect, useRef, useState } from 'react';
import '@/styles/components/popup/bottomSheet.scss';

export default function CustomBottomSheet({
  open = false,
  onClose = () => {},
  title = '',
  height = 60,
  children,
}) {
  const sheetRef = useRef(null);
  const startY = useRef(0);
  const lastY = useRef(0);
  const lastTime = useRef(0);
  const [translateY, setTranslateY] = useState(0);
  const [dragging, setDragging] = useState(false);

  // iOS 100vh 대응
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`,
      );
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // 열릴 때 초기화
  useEffect(() => {
    if (!open) setTranslateY(0);
  }, [open]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  const onTouchStart = e => {
    startY.current = e.touches[0].clientY;
    lastY.current = startY.current;
    lastTime.current = performance.now();
    setDragging(true);

    if (sheetRef.current) sheetRef.current.style.transition = 'none';
  };

  const onTouchMove = e => {
    if (!dragging) return;

    const y = e.touches[0].clientY;
    const diff = y - startY.current;

    if (diff > 0) setTranslateY(diff);

    // 속도 계산 준비용
    lastY.current = y;
    lastTime.current = performance.now();
  };

  const onTouchEnd = () => {
    setDragging(false);

    const now = performance.now();
    const diff = lastY.current - startY.current;
    const time = now - lastTime.current;
    const velocity = diff / time; // px/ms

    const CLOSE_DISTANCE = 120; // 천천히 내릴 때 기준
    const CLOSE_SPEED = 0.6; // 속도 threshold (높을수록 더 빠르게 내려야 닫힘)

    if (sheetRef.current)
      sheetRef.current.style.transition = 'transform 0.22s ease';

    // ✅ 거리 OR 속도 조건 중 하나라도 넘으면 닫기
    if (diff > CLOSE_DISTANCE || velocity > CLOSE_SPEED) {
      setTranslateY(0);
      onClose();
    } else {
      // 되돌리기
      setTranslateY(0);
    }
  };

  return (
    <div
      className={`bottom-sheet-overlay ${open ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div
        ref={sheetRef}
        className={`bottom-sheet ${open ? 'open' : ''}`}
        style={{
          height: `${height}vh`,
          transform: `translateY(${translateY}px)`,
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="grab-bar" />

        {title && <div className="bottom-sheet-header">{title}</div>}

        <div className="bottom-sheet-content">{children}</div>
      </div>
    </div>
  );
}
