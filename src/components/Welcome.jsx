import React,{useState} from "react";
function Welcome({user}){
  const[data,setData]=useState(true);
  function handleClick(){
    setData(!data);
  }
  return(
    <>
    <button onClick={handleClick}>{data?'Exit':'Enter'}</button>
    <h1>{data?`Welcome To ${user}`:`Bye from ${user}`}</h1>
    </>
  )
}
export default Welcome