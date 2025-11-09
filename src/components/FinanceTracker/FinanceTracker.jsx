import { useState ,useEffect } from "react";
import './FinanceTracker.css';
import FinanceCharts from "../../charts/FinanceCharts";
import IncomeTracking from "../IncomeTracking/IncomeTracking";
import TransactionList from "../TransactionList/TransactionList";
import ExpenseTracking from "../ExpenseTracker/ExpenseTracking";
function FinanceTracker(){
const[income,setIncome]=useState('');
const[expense,setExpense]=useState('');
const[balance,setBalance]=useState(()=>{
  const savedBalance = localStorage.getItem('balance-history');
  return savedBalance ? Number(savedBalance):0});
const[source,setSource]=useState('');
const[date,setDate]=useState('');
const[expDate,setExpDate]=useState('');
const[expenseEditIndex,setExpenseEditIndex]=useState(null);
const[incomeEditIndex,setIncomeEditindex]=useState(null);
const[history,setHistory]=useState(()=>{
const savedHistory =localStorage.getItem('history-trans');
  return savedHistory ? JSON.parse(savedHistory):[];
});
const[expEntry,setExpEntry]=useState('');
const[expenseHistory,setExpenseHistory]=useState(()=>{
  const savedExpHis =localStorage.getItem('expense-storage');
  return savedExpHis ? JSON.parse(savedExpHis):[];
});
  const handleIncome =(e)=>setIncome(e.target.value);
  const handleSource=(e)=>setSource(e.target.value);
  const handleDate =(e)=>setDate(e.target.value);
  const handleExpense=(e)=>setExpense(e.target.value);
  const handleExpEntry=(e)=>setExpEntry(e.target.value);
  const handleExpDate=(e)=>setExpDate(e.target.value);
 
  useEffect(()=>{
    localStorage.setItem('history-trans',JSON.stringify(history))
  },[history])

 useEffect(()=>{
  localStorage.setItem('expense-storage',JSON.stringify(expenseHistory))
 },[expenseHistory]);

 useEffect(()=>{
  localStorage.setItem('balance-history',JSON.stringify(balance))
 },[balance])
  const AddIncome =()=>{
    if(!income||!source||!date){
      alert('please fill all the fields');
      return;
    }

   if(incomeEditIndex !== null){
      
      const updatedIncome = [...history];
      updatedIncome[incomeEditIndex]={amount:Number(income),source,date}
      setHistory(updatedIncome);
      const oldValue =history[incomeEditIndex];
      const oldValueAmount=oldValue.amount
      setBalance((prevBalance)=>Number(prevBalance)-Number(oldValueAmount)+Number(income))
      setIncomeEditindex(null);
     
   }
  else{
    const newTransaction = {amount:Number(income),source,date}
    setHistory([...history,newTransaction]);
    setBalance((prevBalance)=>Number(prevBalance)+Number(income));
   }
    setIncome('');
    setSource('');
    setDate('');
  }
  const removeIncome =(indexToRemove)=>{
      const remove = history[indexToRemove]
      setHistory(history.filter((_,index)=> index !== indexToRemove))
      setBalance((prevBalance)=>Number(prevBalance) - Number(remove.amount));
  }
  const EditIncome=(trans,index)=>{
     setIncome(trans.amount);
     setSource(trans.source);
     setDate(trans.date);
     setIncomeEditindex(index);
  }
  const AddExpense=()=>{
    if(!expense||!expEntry||!expDate)
    {
      alert('please fill all the fields');
      return;
    }
    if(balance<=0)
    {
      alert("No balance in your account");
      return;
    }
     if(expenseEditIndex !== null){
      const updatedExpense = [...expenseHistory];
      updatedExpense[expenseEditIndex]={amount:Number(expense),expEntry,expDate}
      setExpenseHistory(updatedExpense);
      const oldvalue = expenseHistory[expenseEditIndex];
      const oldValueAmount = oldvalue.amount;
      console.log(oldValueAmount);
      setBalance((prevBalance)=>Number(prevBalance)+Number(oldValueAmount)-Number(expense));
      setExpenseEditIndex(null);
    }
    else{
    const newExpenses ={amount:Number(expense),expEntry,expDate}
    
    setExpenseHistory([...expenseHistory,newExpenses]);
    setBalance((prevBalance)=> Number(prevBalance)-Number(expense));
    }
    setExpense('');
    setExpEntry('');
    setExpDate('');
    
  }
  const removeExpense=(indexToRemove)=>{
    const remove =expenseHistory[indexToRemove];
    setExpenseHistory(expenseHistory.filter((_,index)=>index !== indexToRemove));
    setBalance((prevBalance)=>Number(prevBalance)+Number(remove.amount));
  }
  const editExpense =(expEd,index)=>{
    setExpense(expEd.amount);
    setExpEntry(expEd.expEntry);
    setExpDate(expEd.expDate);
    setExpenseEditIndex(index);
  }
  return(
    <>
      <h1 className="app-name">PERSONAL FINANCE TRACKER</h1>
      <div className="main-container">
        <div className="left-section responsive-section">
           <IncomeTracking
          income={income}
          source={source}
          date={date}
          handleIncome={handleIncome}
          handleSource={handleSource}
          handleDate={handleDate}
          AddIncome={AddIncome}
          />  
           <ExpenseTracking
            expense={expense}
            expEntry={expEntry}
            date={expDate}
            handleExpense={handleExpense}
            handleExpEntry={handleExpEntry}
            AddExpense={AddExpense}
            handleExpDate={handleExpDate}
          />  
        </div>
        <div className="right-section">
        <div className="financial-status">
            <h2>Current Financial Status</h2>
            <div className="balance-container">Total Balance:₹{balance}</div>
         </div>
        <TransactionList 
          history={history}
         
          removeIncome={removeIncome}
          EditIncome={EditIncome}
          exphistory={expenseHistory}
   
          removeExpense={removeExpense}
          editExpense={editExpense}/>
          
          <FinanceCharts expenseHistory={expenseHistory}/>

         
       </div>
        </div>
      </>
  )
}
export default FinanceTracker