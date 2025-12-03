import './IncomeTracking.css';
import '../FinanceTracker/FinanceTracker.css';
function IncomeTracking({income,source,date,handleIncome,handleSource,handleDate,AddIncome})
{
  const handleSubmit=(e)=>{
    e.preventDefault();
    AddIncome();
  }
  return(
    <>
    <form id='income' onSubmit={handleSubmit}>
    <div  className="income-tracking-container">
           <h2 className='income-title'>INCOME TRACKING</h2>
           <label>Amount</label>
           <input className="income-catcher" required  value={income} type="text" onChange={handleIncome}/>
           <label>Source of income</label>
           <select className='source-catcher' value={source} onChange={handleSource} required>
            <option value="" >Select Source</option>
             <option>Salary</option>
             <option>Side hustle</option>
             <option>Investments</option>
           </select>
           <label>Date</label>
           <input className='date-catcher' value={date} type="date" onChange={handleDate} required/>
           <button type='submit' className='income-add-button'>Add</button>
        </div>
        </form>
         </>
  );
}
export default IncomeTracking