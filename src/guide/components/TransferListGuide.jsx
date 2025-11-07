import * as React from 'react';
import { TransferList } from '@/components/';

export default function TransferListGuide() {
  const [left, setLeft] = React.useState(null);
  const [right, setRight] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setLeft([
        { id: '01', value: '사과' },
        { id: '02', value: '오렌지' },
      ]);
      setRight([
        { id: '03', value: '수박' },
        { id: '04', value: '복숭아' },
        { id: '05', value: '포도' },
      ]);
    }, 10);
  }, []);

  return (
    <>
      <div className="guide-page__title">
        <h2>Transfer</h2>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>Default</h3>
        </div>
        <div className="guide-page__box--cont">
          {left && right ? (
            <TransferList
              leftData={left}
              rightData={right}
              onChange={({ left, right }) => {
                console.log('변경 후:', left, right);
              }}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
}
