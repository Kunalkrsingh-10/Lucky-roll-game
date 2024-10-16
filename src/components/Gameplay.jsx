import React from 'react'
import Totalscore from './Totalscore.jsx';
import Numberselector from './Numberselector.jsx';
import Role_dice from './Role_dice.jsx';
import styled from 'styled-components';
import {useState} from 'react'
const Gameplay = () => { 
  const[score, setScore]=useState(0);
  const [selectNumber, setSelectNumber] = useState(0);
  const[currentdice, setCurrentdice]=useState(1);
  const[error, setError]= useState("")
  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    
  };
  const roll_dice=() => { 
    if(!selectNumber) {
      setError("you have not selected a number");
      return;
    }
    setError("");
    const random = getRandomIntInclusive(1,6);
    setCurrentdice((prev)=>random);
    // to check weather roll_dice is equal to selected no or not 
  
  if(selectNumber=== random){
    setScore((prev)=> prev+random);
    console.log(selectNumber);
    console.log(random);
  }
  else {
    setScore((prev)=> prev-2);
  }
  setSelectNumber(undefined);
  };
  
  return (
    <Main>
      <div className='top-btn'>
      <Totalscore score={score}/>
      <Numberselector error={error} selectNumber={selectNumber} setSelectNumber={setSelectNumber}/>
      </div>
      <Role_dice currentdice={currentdice} roll_dice={roll_dice}/>
      
    </Main>
  )
}

export default Gameplay 
const Main= styled.div`
padding-top:40px;
  .top-btn{
    display: flex;
    justify-content:space-around;
    align-items:end;
    overflow: hidden;
  }
`;