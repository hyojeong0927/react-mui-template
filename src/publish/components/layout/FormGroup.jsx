export default function FormGroup({
  children,
  onSubmit,
  className,
  style,
  formTitle,
}) {
  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className={className} style={style}>
      {formTitle && (
        <fieldset className="sr-only">
          <legend>{formTitle}</legend>
        </fieldset>
      )}
      {children}
    </form>
  );
}
