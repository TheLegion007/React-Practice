import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }
  const complexIncrease = () => {
    setTimeout(()=>{
//    setValue(value + 1)
      setValue((preValue)=> {
        return preValue + 1;
      });
    }, 2000);                                     // callback function , setValue func. is asynchronous , so passing paraameter to update counter even if we click simulataneously //
  }
  return (
    <>
        <section style={{margin: '4rem 4rem', color: 'red'}}>
          <h2>Regular Counter</h2>
          <h2>{value}</h2>
          <button className='btn' onClick={()=> setValue(value-1)}>Decrease Count</button>
          <button className='btn' onClick={reset}>Reset Count</button>
          <button className='btn' onClick={()=> setValue(value+1)}>Increase Count</button>
        </section>
        <section style={{margin: '4rem 4rem', color: 'red'}}>
          <h2>More Complex Counter</h2>
          <h2>{value}</h2>
          <button className='btn' onClick={complexIncrease}>Increase Later</button>
        </section>
    </>
  ); 
};

export default UseStateCounter;
