import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);

  const updateWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect ( () => {
    console.log("useEffect Called ");
    window.addEventListener('resize',updateWindowSize);
  },[]);

  return (
    <>
      <h1>Windows Size</h1>
      <h2>{size} px</h2>
    </>
  )
};

export default UseEffectCleanup;
