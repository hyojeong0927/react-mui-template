import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import '@/styles/components/popup/bottomSheet.scss';

export default function CusotmBottomSheet({
  open = false,
  onClose,
  title = '',
  children,
  height = '50vh',
}) {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return createPortal(
    <div className="bottom-sheet__wrap">
      <div className="bottom-sheet__overlay" onClick={onClose} />

      <div className="bottom-sheet" style={{ height }}>
        <div className="bottom-sheet__handle" />

        {title && <div className="bottom-sheet__title">{title}</div>}

        <div className="bottom-sheet__content">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
