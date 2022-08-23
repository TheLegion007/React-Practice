import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Title - Failed');

  const handleOnClick = () => {
    if(text === 'Title - Failed') {
      setText('Title - Passed');
    }
    else  {
      setText('Title - Failed');
    }
  }
  return (
    <React.Fragment>
      <div>
        <h2>{text}</h2>
        <button type='button' className='btn' onClick={handleOnClick}>Click</button>
      </div>
    </React.Fragment>
  );
};

export default UseStateBasics;
