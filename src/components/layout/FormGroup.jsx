export default function FormGroup({
  children,
  onSubmit,
  className,
  style,
  legend,
}) {
  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className={className} style={style}>
      <fieldset style={{ border: 'none' }}>
        {legend && (
          <legend
            className="sr-only"
            style={{ position: 'absolute', left: '-1000px' }}
          >
            {legend}
          </legend>
        )}
        {children}
      </fieldset>
    </form>
  );
}
