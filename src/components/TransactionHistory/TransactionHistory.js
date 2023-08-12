import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <h2 className={style.title}>Transaction History</h2>
      <table className={style.transactionHistory}>
        <thead className={style.tableHead}>
          <tr className={style.headRow}>
            <th className={style.headCell}>Type</th>
            <th className={style.headCell}>Amount</th>
            <th className={style.headCell}>Currency</th>
          </tr>
        </thead>

        <tbody className={style.tableBody}>
          {transactions.map(transaction => (
            <tr key={transaction.id} className={style.bodyRow}>
              <td className={style.bodyCell}>{transaction.type}</td>
              <td className={style.bodyCell}>{transaction.amount}</td>
              <td className={style.bodyCell}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
