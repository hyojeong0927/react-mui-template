import { useState, useEffect } from 'react';
import './scrollButton.scss';

export default function ScrollButtonPage() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 하단 근처 도달 시 true
      setIsBottom(scrollTop + windowHeight >= documentHeight - 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    alert('버튼 클릭됨!');
  };

  return (
    <>
      <div className="guide-page__title">
        <h2>스크롤 버튼 예시 페이지</h2>
      </div>
      <div className="scroll-page">
        <div className="scroll-content">
          {[...Array(30)].map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 스크롤을
              내려 페이지 끝까지 이동하세요.
            </p>
          ))}
        </div>

        {/* 버튼 */}
        {isBottom && (
          <button className="scroll-btn" onClick={handleClick}>
            끝까지 스크롤 완료!
          </button>
        )}
      </div>
    </>
  );
}
