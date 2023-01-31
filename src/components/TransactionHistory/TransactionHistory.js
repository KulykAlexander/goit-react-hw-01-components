import PropTypes from 'prop-types';
import { TransactionHistoryRow } from 'components/TransactionHistory/TransactionHistoryRow';

import {
  TransactionHistoryTable,
  HeadColumn,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <HeadColumn>Type</HeadColumn>
          <HeadColumn>Amount</HeadColumn>
          <HeadColumn>Currency</HeadColumn>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryRow
            key={item.id}
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};
