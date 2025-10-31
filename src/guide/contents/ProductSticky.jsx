import { useRef, useState, useEffect } from 'react';
import './product.scss';

export default function ProductSticky() {
  const sectionRefs = useRef([]);
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const isClickScrolling = useRef(false);

  const tabItems = [
    { label: '상세정보', content: '상품 상세 정보 내용' },
    { label: '리뷰', content: '리뷰 내용' },
    { label: 'Q&A', content: 'Q&A 내용' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollPos = contentRef.current.scrollTop + 60;

      sectionRefs.current.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveTab(index);
        }
      });
    };

    const contentEl = contentRef.current;
    contentEl.addEventListener('scroll', handleScroll, { passive: true });

    return () => contentEl.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = index => {
    const headerHeight = 56;
    const sectionTop = sectionRefs.current[index].offsetTop - headerHeight;

    isClickScrolling.current = true;

    contentRef.current.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });

    setActiveTab(index);

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };

  return (
    <>
      <div className="guide-page__title">
        <h2>상품 상세 페이지</h2>
      </div>
      <div className="product-sticky-page">
        {/* 헤더 */}
        {/* <header className="header">
          <h1 className="title">상품 상세 페이지</h1>
        </header> */}

        {/* 컨텐츠 */}
        <main className="content" ref={contentRef}>
          {/* 상품 기본 정보 */}
          <section className="product-info">
            <h2 className="product-title">상품명</h2>
            <div className="product-image">이미지 영역</div>
            <p className="product-price">가격: 99,000원</p>
          </section>

          {/* 탭 버튼 */}
          <div className="tabs-container">
            <div className="tabs">
              {tabItems.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => scrollToSection(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 탭 콘텐츠 */}
          {tabItems.map((tab, index) => (
            <section
              key={index}
              ref={el => (sectionRefs.current[index] = el)}
              className="tab-section"
            >
              <h3>{tab.label}</h3>
              <p>{tab.content}</p>
              <div className="dummy-area">스크롤 테스트 콘텐츠</div>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}
