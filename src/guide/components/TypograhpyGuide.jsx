import { TypographyHeading } from '@/components/';

export default function TypograhpyGuide() {
  return (
    <>
      <div className="guide-page__title">
        <h2>Typograhpy</h2>
      </div>
      {/* box */}
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Heading</h3>
        </div>
        <div className="guide-page__box--cont">
          <TypographyHeading level="h1">h1. Heading</TypographyHeading>
          <TypographyHeading level="h1" as="h3">
            접근성과 스타일 분리 가능
          </TypographyHeading>
          <TypographyHeading level="h2">h2. Heading</TypographyHeading>
          <TypographyHeading level="h3">h3. Heading</TypographyHeading>
          <TypographyHeading level="h4">h4. Heading</TypographyHeading>
          <TypographyHeading level="h5">h5. Heading</TypographyHeading>
          <TypographyHeading level="h6">h6. Heading</TypographyHeading>
          <TypographyHeading level="subtitle1">subtitle1</TypographyHeading>
          <TypographyHeading level="subtitle2">subtitle2</TypographyHeading>
          <TypographyHeading level="body1">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </TypographyHeading>
          <TypographyHeading level="body2">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </TypographyHeading>
          <TypographyHeading level="caption">caption text</TypographyHeading>
          <TypographyHeading level="button">button text</TypographyHeading>
          <TypographyHeading level="overline">overline text</TypographyHeading>
        </div>
      </div>
    </>
  );
}
