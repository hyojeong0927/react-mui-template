export default function FormRow({ title, required, children, row }) {
  return (
    <div className="form-row" style={{ marginBottom: '16px' }}>
      {title && (
        <div
          className={`form-row__tit ${required ? 'required' : ''}`}
          style={{
            display: 'block',
            marginBottom: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {title}
          {required && <em style={{ color: 'red', marginLeft: 4 }}>*</em>}
        </div>
      )}

      <div className={`form-row__item ${row ? 'flex' : ''}`}>{children}</div>
    </div>
  );
}
