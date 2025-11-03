import '../IncomeTracking/IncomeTracking.css';
import '../ExpenseTracker/ExpenseTracking.css';
function ExpenseTracking({expense,expEntry,date,handleExpense,handleExpEntry,handleDate,AddExpense})
{
  return(
    <>
    <div className="expense-tracking-container">
           <h2 className='expense-title'>EXPENSE TRACKING</h2>
           <label>Amount</label>
           <input className="expense-catcher"  value={expense} type="text" onChange={handleExpense}/>
           <label>Expense category </label>
           <select className='debit-catcher' value={expEntry} onChange={handleExpEntry}>
            <option value="">Select expense</option>
             <option>Food</option>
             <option>Entertainment</option>
             <option>Rent</option>
           </select>
           <label>Date</label>
           <input className='date-catcher' value={date} type="date" onChange={handleDate}/>
           <button className='add-button' onClick={AddExpense}>Add</button>
        </div>
        
         </>
  );
}
export default ExpenseTracking