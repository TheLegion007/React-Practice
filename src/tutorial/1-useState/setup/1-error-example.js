import React, { Fragment } from 'react';

const ErrorExample = () => {
  let title = 'Title - Failed';

  const handleOnClick = () => {
    title = 'Title - Success';
    console.log({title});
  }
  return (
    <React.Fragment>
      <div>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={handleOnClick}>Click</button>
      </div>
    </React.Fragment>
  )
};

export default ErrorExample;
