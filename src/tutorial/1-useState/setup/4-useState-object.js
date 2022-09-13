import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'manish',
    age: 25, 
    message: 'random message'
  });
  //console.log(person);

  const changeMessage = () => {
    //setPerson('message updated ...');   // can't since its a string //
    setPerson({...person, message:'message updated '});
  } 
  return (
  <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={() => changeMessage()}>change Message</button>
  </>
  );
};

export default UseStateObject;
