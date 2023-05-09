import React, { useState, useEffect } from "react";
import "./TransactionTable.css";

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
