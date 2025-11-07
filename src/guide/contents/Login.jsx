import { FormGroup, FormRow, BasicTextField, Button } from '@/components/';

export default function LoginPage() {
  return (
    <>
      <div className="guide-page__title">
        <h2>로그인</h2>
      </div>
      <FormGroup>
        <FormRow title="아이디">
          <BasicTextField
            id="name"
            label=""
            placeholder="검색어를 입력하세요"
          />
        </FormRow>
        <FormRow title="비밀번호"></FormRow>
        <Button type="submit" variant="primary">
          제출
        </Button>
      </FormGroup>
    </>
  );
}
