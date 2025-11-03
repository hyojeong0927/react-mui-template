export default function RuleGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>Rule</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>목적 (Purpose)</h3>
        </div>
        <div className="guide-page__box--cont">
          웹퍼블리싱 가이드는 웹사이트를 개발, 운영, 유지보수하는 과정에서 코드
          품질, 디자인 일관성, 사용자 경험(UX)을 최적화하기 위한 표준을
          제시합니다.
          <br />이 가이드는 팀 내 의사소통을 효율화하고 프로젝트 진행 시 일관된
          결과물을 생성하는 데 목적이 있습니다.
        </div>

        <div className="guide-page__box--tit">
          <h3>기본 원칙 (Core Principles)</h3>
        </div>
        <div className="guide-page__box--cont">
          <table>
            <caption>기본원칙</caption>
            <colgroup>
              <col width="30%"></col>
              <col width="70%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>원칙</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>일관성 (Consistency)</th>
                <td>
                  모든 페이지에서 디자인 및 코드가 통일성을 유지해야 합니다.
                </td>
              </tr>
              <tr>
                <th>접근성 (Accessibility)</th>
                <td>
                  WCAG(Web Content Accessibility Guidelines) 2.1 AA 기준을
                  준수합니다.
                </td>
              </tr>
              <tr>
                <th>성능 최적화 (Performance Optimization)</th>
                <td>
                  로딩 속도를 최소화하고 효율적인 코드 작성 원칙을 따릅니다.
                </td>
              </tr>
              <tr>
                <th>유지보수 용이성 (Maintainability)</th>
                <td>코드 가독성과 재사용성을 높이는 구조로 작성합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="guide-page__box--tit">
          <h3>테스트 및 QA (Testing & QA)</h3>
        </div>
        <div className="guide-page__box--cont">
          <ol>
            <li>
              <h4>브라우저 호환성 테스트</h4>
              <ul>
                <li>주요 지원 브라우저 : Chrome, Edge</li>
              </ul>
            </li>
            <li>
              <h4>접근성</h4>
              <ul>
                <li>
                  웹 접근성 기준(대한민국 공식 전자정부 지침)에 최대한
                  부합하도록 제작합니다.
                </li>
                <li>
                  참조 사이트 :
                  <a
                    href="https://www.krds.go.kr/html/site/index.html"
                    target="_blank"
                  >
                    https://www.krds.go.kr/
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h4>해상도 테스트</h4>
              <ul>
                <li>데스크톱 : 1920px</li>
                <li>모바일 : 768px</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="guide-page__box--tit">
          <h3>버전 관리 (Version Control)</h3>
        </div>
        <div className="guide-page__box--cont">
          <table>
            <caption>버전 관리 내역</caption>
            <colgroup>
              <col width="30%"></col>
              <col width="70%"></col>
            </colgroup>
            <thead>
              <tr>
                <th>항목</th>
                <th>버전</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>React</th>
                <td>19.1.1</td>
              </tr>
              <tr>
                <th>Material UI</th>
                <td>7.3.4</td>
              </tr>
              <tr>
                <th>Sass</th>
                <td>1.93.2</td>
              </tr>
              <tr>
                <th>Ag Grid React</th>
                <td>34.3.1</td>
              </tr>
              <tr>
                <th>Dayjs</th>
                <td>1.11.19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
