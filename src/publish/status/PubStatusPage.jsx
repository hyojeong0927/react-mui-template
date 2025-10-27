import { useState, useMemo } from 'react';
import { menu00, menu01, menu02, filters } from '../data/status';
import './status.scss';

export default function PubStatusPage() {
  const mergedData = useMemo(() => {
    return [...menu00, ...menu01, ...menu02].map(row => ({
      ...row,
      history: Array.isArray(row.history)
        ? row.history
        : row.history
          ? [row.history]
          : [],
    }));
  }, []);

  const [selectedFilters, setSelectedFilters] = useState(
    Object.fromEntries(
      filters.map(f => [
        f.label,
        f.options.includes('전체') ? '전체' : f.options[0],
      ]),
    ),
  );

  const [sortKey, setSortKey] = useState('no');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilterChange = (label, value) => {
    setSelectedFilters(prev => ({ ...prev, [label]: value }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const matchesFilter = (row, filter) => {
    const selected = selectedFilters[filter.label];
    if (selected === '전체') return true;

    const map = {
      진행상태: row.status,
      Category: row.depth1,
      '퍼블 시작일': row.startDate,
      수정일: row.modifiedDate,
      '디자인 유무': row.hasDesign,
      '개발 시작일': row.devStartDate,
    };
    return map[filter.label] === selected;
  };

  const filteredData = useMemo(() => {
    return mergedData.filter(row => filters.every(f => matchesFilter(row, f)));
  }, [mergedData, matchesFilter]);

  const sortValues = (a, b, key) => {
    const aVal = a[key];
    const bVal = b[key];

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal, 'ko');
    }
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return aVal - bVal;
    }
    return 0;
  };

  const sortedData = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => sortValues(a, b, sortKey));
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }, [filteredData, sortKey, sortOrder]);

  const handleSort = key => {
    if (sortKey === key) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const latestModifiedDate = useMemo(() => {
    const dates = filteredData
      .map(d => d.modifiedDate)
      .filter(Boolean)
      .map(d => new Date(d));

    if (dates.length === 0) return '-';
    const latest = new Date(Math.max(...dates.map(d => d.getTime())));
    return latest.toLocaleDateString('ko-KR');
  }, [filteredData]);

  const summary = useMemo(() => {
    const total = filteredData.length;
    const statuses = ['진행대기', '진행중', '완료', '보류', '제외'];
    return [
      { label: '전체', count: total },
      ...statuses.map(status => {
        const count = filteredData.filter(d => d.status === status).length;
        return {
          label: status,
          count,
          latestModifiedDate,
          percent: total ? Math.round((count / total) * 100) : 0,
        };
      }),
      { label: '수정', count: filteredData.filter(d => d.modifiedDate).length },
      { label: '표시된', count: total },
    ];
  }, [filteredData, latestModifiedDate]);

  const columns = useMemo(
    () => [
      { label: 'No', key: 'no' },
      { label: 'ID', key: 'id' },
      { label: 'Depth 01', key: 'depth1' },
      { label: 'Depth 02', key: 'depth2' },
      { label: 'Depth 03', key: 'depth3' },
      { label: 'Type', key: 'type' },
      { label: 'Folder', key: 'folder' },
      { label: 'File name', key: 'fileName' },
      { label: '진행상태', key: 'status' },
      { label: '시작일', key: 'startDate' },
      { label: '완료일', key: 'endDate' },
      { label: '수정일', key: 'modifiedDate' },
      { label: '디자인 유무', key: 'hasDesign' },
      { label: '개발시작일', key: 'devStartDate' },
      { label: 'History', key: 'history' },
    ],
    [],
  );

  return (
    <div className="pub-status">
      <header className="pub-status__header">
        <h1 className="pub-status__title">퍼블 현황</h1>
        <div className="pub-status__title-link">
          <button
            type="button"
            className="btn-status-top"
            onClick={() => window.open('/publish/guide', '_blank')}
          >
            Guide
          </button>
        </div>
      </header>

      {/* 요약 */}
      <section className="pub-status__summary">
        {summary.map(item => {
          let statusClass = '';
          switch (item.label) {
            case '진행대기':
              statusClass = 'delay';
              break;
            case '진행중':
              statusClass = 'ing';
              break;
            case '완료':
              statusClass = 'done';
              break;
            case '보류':
              statusClass = 'pause';
              break;
            case '제외':
              statusClass = 'exclude';
              break;
            case '전체':
              statusClass = 'total';
              break;
            default:
              statusClass = '';
          }

          return (
            <dl key={item.label} className={`status ${statusClass}`}>
              <dt>{item.label}</dt>
              <dd>
                {' '}
                {item.count}
                {item.percent !== undefined && `건(${item.percent}%)`}
              </dd>
            </dl>
          );
        })}
        <dl className="modify">
          <dt>최신 수정일</dt>
          <dd>{latestModifiedDate}</dd>
        </dl>
      </section>

      {/* 필터 */}
      <section className="pub-status__filter">
        {filters.map(filter => (
          <div key={filter.label} className="item">
            <span className="label">{filter.label}</span>
            <select
              className="select-box"
              value={selectedFilters[filter.label]}
              onChange={e => handleFilterChange(filter.label, e.target.value)}
            >
              {filter.options.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </section>

      {/* 테이블 */}
      <section className="pub-status__table-section">
        <table className="pub-status__table">
          <colgroup>
            {/* 컬럼 폭 지정 */}
            {[
              { width: 3, name: 'No' },
              { width: 7, name: 'ID' },
              { width: 7, name: 'Depth01' },
              { width: 7, name: 'Depth02' },
              { width: 7, name: 'Depth03' },
              { width: 7, name: 'Type' },
              { width: 3, name: 'Folder' },
              { width: 8, name: 'File Name' },
              { width: 6, name: '진행상태' },
              { width: 6, name: '시작일' },
              { width: 6, name: '완료일' },
              { width: 6, name: '수정일' },
              { width: 6, name: '디자인유무' },
              { width: 6, name: '개발시작일' },
              { width: 15, name: 'History' },
            ].map((col, idx) => (
              <col key={idx} width={`${col.width}%`} />
            ))}
          </colgroup>
          <thead className="pub-status__table-head">
            <tr>
              {columns.map(col => (
                <th key={col.key} onClick={() => handleSort(col.key)}>
                  {col.label}
                  <span className="sort">
                    {sortKey === col.key && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="pub-status__table-body">
            {sortedData.length > 0 ? (
              sortedData.map(row => (
                <tr key={row.no}>
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.key === 'fileName' ? (
                        <a
                          href={`/publish/${row.folder}${row.fileUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {row.fileName}
                        </a>
                      ) : col.key === 'status' ? (
                        <span
                          className={`status-badge ${
                            row.status === '완료'
                              ? 'done'
                              : row.status === '진행중'
                                ? 'ing'
                                : row.status === '진행대기'
                                  ? 'delay'
                                  : 'normal'
                          }`}
                        >
                          {row.status}
                        </span>
                      ) : col.key === 'modifiedDate' ? (
                        <span className="modify">{row.modifiedDate}</span>
                      ) : col.key === 'history' ? (
                        Array.isArray(row.history) && row.history.length > 0 ? (
                          <details className="history">
                            <summary>{row.history.length}건 보기 </summary>
                            <ul className="list-disc">
                              {row.history.map((item, idx) => (
                                <li
                                  key={idx}
                                  dangerouslySetInnerHTML={{ __html: item }}
                                />
                              ))}
                            </ul>
                          </details>
                        ) : (
                          '-'
                        )
                      ) : (
                        row[col.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="no-data">
                  데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
