import './TransactionList.css';
function TransactionList({history,removeIncome,EditIncome,exphistory,removeExpense,editExpense}){
  return(
    <>
    <div className="recent-transaction-container">
      <h2>Recent Transaction</h2>
       <h3>Income</h3>
      
        {history.length ===0 && <p>No Income Records Yet</p>}
      <ol className='income-grid'>
       {history.map((transaction,index)=>(
       <li className='income-list' key={index}>
        <div>₹{transaction.amount}</div>
        <div>{transaction.source}</div>
        <div>on{transaction.date}</div>   
        <div>
          <button className="income-delete" onClick={()=>removeIncome(index)}>
            Delete
        </button>
        </div>
       <div>
       <button className="income-edit" onClick={()=>EditIncome(transaction,index)}>
        Edit
        </button>
      </div>
      </li>
      ))} 
      </ol>
     
      <h3>Expenses</h3>
      {exphistory.length ===0 && <p>No expenses recorded yet</p>}
       <ol className='expense-grid'>
      {exphistory.map((living,index)=>(
        <li className='expense-list' key={index}>
        <div>₹{living.amount}</div>
        <div>{living.expEntry}</div>
        <div> on {living.expDate}</div>
        <div>
        <button className="expense-remove" onClick={()=>removeExpense(index)}>
          Remove
        </button>
        </div>
        <div>
        <button className="expense-edit" onClick={()=>editExpense(living,index)}>
          Edit
          </button>
        </div>
      </li>
    ))}
      </ol>
    </div>
    </>
  )
}
export default TransactionList