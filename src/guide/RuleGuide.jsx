export default function RuleGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>웹 퍼블리싱 가이드 (Web Publishing Guide)</h2>
      </div>

      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>1. 목적 (Purpose)</h3>
        </div>
        <div className="guide-page__box--cont">
          웹퍼블리싱 가이드는 웹사이트를 개발, 운영, 유지보수하는 과정에서 코드
          품질, 디자인 일관성, 사용자 경험(UX)을 최적화하기 위한 표준을
          제시합니다.
          <br />이 가이드는 팀 내 의사소통을 효율화하고 프로젝트 진행 시 일관된
          결과물을 생성하는 데 목적이 있습니다.
        </div>

        <div className="guide-page__box--tit">
          <h3>2. 기본 원칙 (Core Principles)</h3>
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
                <td>WCAG 2.1 AA 기준을 준수합니다.</td>
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
          <h3>3. 접근성 (Accessibility)</h3>
        </div>
        <div className="guide-page__box--cont">
          <ol>
            <li>준수 기준: WCAG 2.1 AA (국제 표준)</li>
            <li>국내 기준: 대한민국 웹 접근성 지침(전자정부 표준) 준수</li>
            <li>
              참조 사이트:{' '}
              <a href="https://www.krds.go.kr/" target="_blank">
                https://www.krds.go.kr/
              </a>
            </li>
            <li>
              목표: 시각, 청각, 인지, 운동 장애를 가진 사용자를 포함한 모든
              사용자가 동등하게 정보에 접근할 수 있도록 보장
            </li>
          </ol>
        </div>
        <div className="guide-page__box--tit">
          <h3>4. 코딩 규칙 (Coding Rules)</h3>
        </div>
        <div className="guide-page__box--cont">
          퍼블리싱 작업 전반에 적용되는 세부 코드 규칙을 정의합니다.
          <ol>
            <li>
              HTML Rules
              <ul>
                <li>시맨틱 태그를 우선 사용 (section, article, nav 등)</li>
                <li>접근성 고려: alt, aria-label, role 속성 명시</li>
                <li>불필요한 중첩 최소화</li>
              </ul>
            </li>
            <li>
              CSS / SCSS Rules
              <ul>
                <li>
                  Naming Convention: BEM 방식 권장 (.block__element--modifier)
                </li>
                <li>
                  단위: rem 단위 사용, 예외적으로 border-width 등은 px 허용
                </li>
                <li>
                  구조: _variables.scss, _mixins.scss, _layout.scss,
                  _components.scss 분리
                </li>
              </ul>
            </li>
            <li>
              JavaScript Rules
              <ul>
                <li>ES Modules 기반 import/export 사용</li>
                <li>DOM 조작은 최소화, React 컴포넌트 우선 활용</li>
                <li>전역변수 사용 금지, const/let으로 선언</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="guide-page__box--tit">
          <h3>5. 디자인 가이드라인 (Design Guidelines)</h3>
        </div>
        <div className="guide-page__box--cont">
          <ol>
            <li>컬러 팔레트: 브랜드 기준 색상 코드 유지</li>
            <li>타이포그래피: 프로젝트 공통 폰트 및 크기 체계화</li>
            <li>컴포넌트 일관성: Material UI 기반 컴포넌트 스타일 통일</li>
          </ol>
        </div>
        <div className="guide-page__box--tit">
          <h3>6. 성능 최적화 (Performance Optimization)</h3>
        </div>
        <div className="guide-page__box--cont">
          <ol>
            <li>이미지: WebP, AVIF 포맷 우선 사용</li>
            <li>Lazy Loading, 코드 스플리팅 적용</li>
            <li>불필요한 렌더링 최소화</li>
          </ol>
        </div>
        <div className="guide-page__box--tit">
          <h3>7. 테스트 및 QA (Testing & QA)</h3>
        </div>
        <div className="guide-page__box--cont">
          <ol>
            <li>
              <h4>브라우저 호환성</h4>
              <ul>
                <li>지원 브라우저 : Chrome, Edge</li>
                <li>
                  기준 해상도 :
                  <ul>
                    <li>데스크톱: 1920px</li>
                    <li>모바일: 768px</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <h4>접근성 점검</h4>
              <ul>
                <li>검사 도구: WAVE, axe, Lighthouse</li>
                <li>검수 기준: 전자정부 웹 접근성 지침에 부합 여부</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="guide-page__box--tit">
          <h3>8. 버전 관리 (Version Management)</h3>
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
