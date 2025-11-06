import { useState, useEffect } from 'react';
import { Account, Transaction } from '@/components/';

export default function AccountPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          date: '2025-11-03',
          time: '09:12',
          title: '부수입',
          type: 'deposit',
          amount: 300000,
          balance: 245200,
        },
        {
          date: '2025-11-04',
          time: '11:05',
          title: '스타벅스',
          type: 'withdraw',
          amount: 5800,
          balance: 245200 - 5800,
        },
        {
          date: '2025-11-05',
          time: '09:12',
          title: '월급',
          type: 'deposit',
          amount: 2300000,
          balance: 245200,
        },
        {
          date: '2025-11-05',
          time: '11:05',
          title: '스타벅스',
          type: 'withdraw',
          amount: 5800,
          balance: 245200 - 5800,
        },
      ]);
    }, 500);
  }, []);

  return (
    <>
      <div className="guide-page__title">
        <h2>Account</h2>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3>입출금</h3>
        </div>
        <div className="guide-page__box--cont">
          <Account
            bankName="카카오뱅크"
            accountNumber="3333-02-1234567"
            totalBalance="₩2,430,000"
            availableBalance="₩2,420,000"
            layoutType="default" // compact | horizontal
          />
        </div>
        <div className="guide-page__box--cont">
          <Transaction data={data} />
        </div>
      </div>
    </>
  );
}
