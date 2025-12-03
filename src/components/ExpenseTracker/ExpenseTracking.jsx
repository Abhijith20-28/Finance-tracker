import '../IncomeTracking/IncomeTracking.css';
import '../ExpenseTracker/ExpenseTracking.css';
function ExpenseTracking({expense,expEntry,expDate,handleExpense,handleExpEntry,handleExpDate,AddExpense})
{
  const handleSubmit=(e)=>{
    e.preventDefault();
    AddExpense();
  }
  return(
    <>
    <form id='income' onSubmit={handleSubmit}>
    <div className="expense-tracking-container">
           <h2 className='expense-title'>EXPENSE TRACKING</h2>
           <label>Amount</label>
           <input className="expense-catcher" required value={expense} type="text" onChange={handleExpense}/>
           <label>Expense category </label>
           <select className='debit-catcher' value={expEntry} onChange={handleExpEntry} required>
            <option value="">Select expense</option>
             <option>Food</option>
             <option>Entertainment</option>
             <option>Rent</option>
           </select>
           <label>Date</label>
           <input className='date-catcher' value={expDate} type="date" onChange={handleExpDate} required/>
           <button type='submit' className='add-button'>Add</button>
        </div>
        </form>
         </>
  );
}
export default ExpenseTracking