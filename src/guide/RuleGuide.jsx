export default function RuleGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>Rule</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>목적</h3>
        </div>
        <div className="guide-page__box--cont">
          웹퍼블리싱 가이드는 웹사이트를 개발, 운영, 유지보수하는 과정에서 코드
          품질, 디자인 일관성, 사용자 경험(UX)을 최적화하기 위한 표준을
          제시합니다.
          <br />이 가이드는 팀 내 의사소통을 효율화하고 프로젝트 진행 시 일관된
          결과물을 생성하는 데 목적이 있습니다.
        </div>
        <div className="guide-page__box--tit">
          <h3>기본 원칙</h3>
        </div>
        <div className="guide-page__box--cont">
          <ol>
            <li>
              일관성 : 모든 페이지에서 디자인 및 코드가 통일성을 유지해야
              합니다.
            </li>
            <li>
              접근성 : WCAG(Web Content Accessibility Guidelines) 2.1 AA 기준을
              준수합니다.
            </li>
            <li>
              성능 최적화 : 로딩 속도를 최소화하고 효율적인 코드 작성 원칙을
              따릅니다.
            </li>
            <li>
              유지보수 용이성 : 코드 가독성과 재사용성을 높이는 구조로
              작성합니다.
            </li>
          </ol>
        </div>
        <div className="guide-page__box--tit">
          <h3>테스트 및 QA</h3>
        </div>
        <div className="guide-page__box--cont">
          <ol>
            <li>
              <h4>브라우저 호환성 테스트</h4>
              <ul>
                <li>주요 브라우저 : Chrome, Edge</li>
              </ul>
            </li>
            <li>
              <h4>접근성</h4>
              <ul>
                <li>
                  웹접근성 기준(대한민국 공식 전자정부)에 최대한 맞춤 :{' '}
                  <a
                    href="https://www.krds.go.kr/html/site/index.html"
                    target="_blank"
                  >
                    https://www.krds.go.kr/html/site/index.html
                  </a>
                </li>
              </ul>
            </li>
            <li>해상도 테스트 : 데스크톱(1920px)</li>
          </ol>
        </div>
        <div className="guide-page__box--tit">
          <h3>업데이트 및 버전 관리</h3>
        </div>
        <div className="guide-page__box--cont"></div>
        <div className="guide-page__box--tit">
          <h3>라이브러리 버전 관리</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
    </>
  );
}
