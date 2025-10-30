import { BasicTextField } from '@/components/';

export default function TextFieldGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>Text Field</h2>
      </div>

      {/* 기본 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>기본 입력</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicTextField
            id="name"
            label=""
            placeholder="아이디를 입력하세요"
          />
        </div>
      </div>

      {/* 비밀번호 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>비밀번호</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicTextField
            id="pw"
            label=""
            type="password"
            required
            placeholder="비밀번호 입력"
            helperText=""
          />
        </div>
      </div>

      {/* 숫자 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>숫자 입력</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicTextField
            id="age"
            label=""
            type="number"
            placeholder="숫자 입력"
            helperText=""
          />
        </div>
      </div>

      {/* 오류 상태 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>오류 상태</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicTextField
            id="email"
            label="이메일"
            error
            helperText="이메일 형식이 올바르지 않습니다."
            placeholder="user@example.com"
          />
        </div>
      </div>

      {/* 비활성화 상태 */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>비활성화 상태</h3>
        </div>
        <div className="guide-page__box--cont">
          <BasicTextField
            id="readonly"
            label="비활성 필드"
            disabled
            value="읽기 전용"
            helperText=""
            placeholder=""
          />
        </div>
      </div>
    </>
  );
}
