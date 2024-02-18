import css from './TransactionHistory.module.css'
import clsx from 'clsx';


export const TransactionHistory = ({transactions}) => {
    return (
    <table className={css.table}>
  <thead>
    <tr>
      <th className={css.tableHeader}>Type</th>
      <th className={css.tableHeader}>Amount</th>
      <th className={css.tableHeader}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({id, type, amount, currency}) => (
    <tr className={css.tableRow} key={id}>
      <td className={clsx(css.tableData, css.tableDataType)}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>
      ))}          
    
  </tbody>
</table>

)
};