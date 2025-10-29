export default function LayoutGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>Layout</h2>
      </div>
      {/* default */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Default</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
      {/* main */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Main</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
      {/* AuthLayout */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>AuthLayout</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
      {/* DashboardLayout */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>DashboardLayout</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
      {/* BlankLayout */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>BlankLayout</h3>
        </div>
        <div className="guide-page__box--cont"></div>
      </div>
    </>
  );
}
