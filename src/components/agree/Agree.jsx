import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  defaultOpen = 'first', // 'first', 'all', 'none'
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

  // 제어형 아코디언 상태
  const [expanded, setExpanded] = useState(false);
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    if (defaultOpen === 'first' && options.length > 0) {
      setExpanded(`panel0`);
    } else if (defaultOpen === 'all') {
      setAllOpen(true);
    } else {
      setExpanded(false);
      setAllOpen(false);
    }
  }, [defaultOpen, options]);

  const handleAccordionChange = panel => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleToggleAllAccordion = () => {
    setAllOpen(prev => !prev);
    if (!allOpen) {
      setExpanded(false); // 개별 제어 비활성
    }
  };

  return (
    <div className={`agree-box ${className}`}>
      {subtitle && <p className="sub-title">{subtitle}</p>}
      {children && <div className="agree-guide">{children}</div>}

      {/* 전체 동의 체크박스 */}
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

          {/* 모두 열기/닫기 버튼 */}
          <button
            type="button"
            className="agree-toggle-all"
            onClick={handleToggleAllAccordion}
          >
            {allOpen ? '모두 닫기' : '모두 열기'}
          </button>
        </div>
      )}

      {/* 아코디언 리스트 */}
      <div className="agree-content">
        {options.map((option, index) => {
          const panelId = `panel${index}`;
          const hasContent = !!contents[option.children];
          const isExpanded = allOpen ? true : expanded === panelId;

          return (
            <Accordion
              key={option.value}
              expanded={isExpanded}
              onChange={handleAccordionChange(panelId)}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={hasContent ? <ExpandMoreIcon /> : null}
                aria-controls={`content-${option.value}`}
                id={`header-${option.value}`}
              >
                <label className="agree-label">
                  <Checkbox
                    checked={value.includes(option.value)}
                    onClick={e => e.stopPropagation()}
                    onChange={() => toggle(option.value)}
                    disabled={option.disabled}
                    color="primary"
                  />
                  <Typography>{option.label}</Typography>
                </label>
              </AccordionSummary>

              {hasContent && (
                <AccordionDetails id={`content-${option.value}`}>
                  {contents[option.children]}
                </AccordionDetails>
              )}
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
