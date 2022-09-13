import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {           //Setup(alias) of UseStateArray //

  const [people, setPeople] = useState(data)   // initializing with array //
  
  const removeItem = (id) => {
    let newPeople = people.filter((person)=> person.id !== id) ; // will store all array elements which doesn't match with the given id in parameters //
    setPeople(newPeople);
   }
  return (
    <>
    {
      people.map((person) => {
        const {id, name} = person;
        return ( 
        <div key={id} className='item'>
          <h2>{name}</h2>
          <button onClick={()=>removeItem(id)}>remove</button>    
          {/*passing id to delete  according to it. */}
        </div>
        );
      })
    }
    <button type='button' className='btn' onClick={()=> setPeople([])}>Clear Items</button>
    </>
  );
};

export default UseStateArray;
