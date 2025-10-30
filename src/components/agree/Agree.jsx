import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './agree.scss';

export default function Agree({
  options = [],
  value = [],
  subtitle,
  children,
  contents = {},
  onChange,
  showSelectAll = true,
  selectAllLabel = '전체 동의',
  className = '',
}) {
  const allValues = options.map(opt => opt.value);
  const isAll = value.length === allValues.length;
  const isSome = value.length > 0 && !isAll;

  const toggle = optionValue => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange?.(newValue);
  };

  const toggleAll = () => {
    onChange?.(isAll ? [] : [...allValues]);
  };

  const [expandedItems, setExpandedItems] = useState([]);
  const toggleExpand = val => {
    setExpandedItems(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val],
    );
  };

  return (
    <div className={`agree-box ${className}`}>
      {subtitle && <p className="sub-title">{subtitle}</p>}
      {children && <div className="agree-guide">{children}</div>}

      {/* 전체 동의 */}
      {showSelectAll && (
        <div className="agree-footer">
          <label className="agree-selectall">
            <Checkbox
              checked={isAll}
              indeterminate={isSome}
              onChange={toggleAll}
              color="primary"
            />
            <span>{selectAllLabel}</span>
          </label>
        </div>
      )}

      {/* 약관 리스트 */}
      <div className="agree-content">
        {options.map(option => {
          const isExpanded = expandedItems.includes(option.value);
          const hasContent = !!contents[option.children];
          return (
            <div key={option.value} className="agree-item">
              <div className="agree-item__header">
                <label className="agree-label">
                  <Checkbox
                    checked={value.includes(option.value)}
                    onChange={() => toggle(option.value)}
                    disabled={option.disabled}
                    color="primary"
                  />
                  <span>{option.label}</span>
                </label>

                {hasContent && (
                  <button
                    type="button"
                    onClick={() => toggleExpand(option.value)}
                    aria-expanded={isExpanded}
                    aria-controls={`content-${option.value}`}
                    className="agree-toggle"
                  >
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                  </button>
                )}
              </div>

              {hasContent && isExpanded && (
                <div
                  id={`content-${option.value}`}
                  className="agree-item__content"
                >
                  {contents[option.children]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
