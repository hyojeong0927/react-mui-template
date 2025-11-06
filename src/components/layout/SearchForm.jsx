import { FormGroup, Button } from '@/components';

export default function SearchForm({
  children,
  button = true,
  onSubmit,
  searchBtnId,
}) {
  return (
    <FormGroup
      onSubmit={e => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
    >
      {children}
      {button && (
        <div className="search-form__button-area">
          <Button type="submit" id={searchBtnId}>
            검색
          </Button>
        </div>
      )}
    </FormGroup>
  );
}
