export default function FormRow({ label, error, children, helperText }) {
  return (
    <div
      className={`form-row ${error ? 'error' : ''}`}
      style={{ marginBottom: '16px' }}
    >
      <label
        style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}
      >
        {label}
      </label>
      <div>{children}</div>
      {error && helperText && (
        <span style={{ color: 'red', fontSize: '12px' }}>{helperText}</span>
      )}
    </div>
  );
}
