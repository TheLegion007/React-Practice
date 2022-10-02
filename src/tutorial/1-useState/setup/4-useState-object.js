import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name:'manish',
  //   age: 25, 
  //   message: 'random message'
  // });
  //console.log(person);

  const [name, setname] = useState('useState for name');
  const [age, setage] = useState(24);
  const [message, setmessage] = useState('useState for message');

  const changeMessage = () => {
    //setPerson('message updated ...');   // can't since its a string //
    //setPerson({...person, message:'message updated '});
    if(age === 25) {
      setname('useState for name');
      setage(24);
      setmessage('useState for message');
    }
    else {
      setname('Manish Singh');
      setage(25);
      setmessage('Lives to Sleep');
    }

  } 
  return (
  <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={() => changeMessage()}>change Message</button>
  </>
  );
};

export default UseStateObject;
