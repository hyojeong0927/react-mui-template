import { useState, useRef, useEffect } from 'react';
import './scrollButton.scss';

export default function ScrollButtonPage() {
  const [isBottom, setIsBottom] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    setIsBottom(scrollTop + clientHeight >= scrollHeight - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    alert('지정된 영역 스크롤 완료!');
  };

  return (
    <>
      <div className="guide-page__title">
        <h2>지정 영역 스크롤 감지 예시</h2>
      </div>

      <div className="scroll-area" ref={scrollRef}>
        {[...Array(30)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 스크롤 영역
            안에서만 감지됩니다. ({i + 1})
          </p>
        ))}
      </div>

      {isBottom && (
        <button className="scroll-btn" onClick={handleClick}>
          영역 끝까지 스크롤 완료!
        </button>
      )}
    </>
  );
}
