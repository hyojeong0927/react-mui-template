import TypographyHeading from './TypographyHeading';
import Button from './Button';

export default function Title({
  titleText = '',
  titleBtn = null,
  level = 'h2',
  align = 'left',
  className = '',
}) {
  const wrapClass = `title-wrap ${align} ${className}`.trim();

  const renderTitleBtn =
    typeof titleBtn === 'string' ? <Button>{titleBtn}</Button> : titleBtn;

  return (
    <article className={wrapClass}>
      <TypographyHeading level={level}>{titleText}</TypographyHeading>
      {renderTitleBtn && <div className="head-btn">{renderTitleBtn}</div>}
    </article>
  );
}
