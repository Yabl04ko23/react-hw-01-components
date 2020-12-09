import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
   const liItems = items.map((items)=>{
    return (
      <tr key={items.id} className={styles.transactionItem}>
        <td className={styles.transactionText}>{items.type}</td>
        <td className={styles.transactionText}>{items.amount}</td>
        <td className={styles.transactionText}>{items.currency}</td>
      </tr>
    );
   });
  return(
    <>
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableDescribe}>
          <th className={styles.describeText}>Type</th>
          <th className={styles.describeText}>Amount</th>
          <th className={styles.describeText}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.transactions}>{liItems}</tbody>
    </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array
};

export default TransactionHistory;