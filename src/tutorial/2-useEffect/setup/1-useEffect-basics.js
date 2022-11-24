import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(()=> {
    console.log("useEffect called ....");
    document.title = `new Messages(${value})`;
  },[value]);         //will run on initial render []  and also when value changes [value] only when used second parameter //
  
  // useEffect(()=> {
  //   console.log("useEffect called ....");
  //   document.title = `new Messages(${value})`;
  // },[]);

  return(
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value + 1)}>Click Me</button>
    </>
  )
};

export default UseEffectBasics;
