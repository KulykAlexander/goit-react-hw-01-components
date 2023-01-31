import PropTypes from 'prop-types';
import { TransactionRow } from './TransactionHistory.styled';

export const TransactionHistoryRow = ({ id, type, amount, currency }) => {
  return (
    <TransactionRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionRow>
  );
};

TransactionHistoryRow.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
