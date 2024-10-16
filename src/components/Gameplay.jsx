import React from 'react'
import Totalscore from './Totalscore.jsx';
import Numberselector from './Numberselector.jsx';
import Role_dice from './Role_dice.jsx';
import styled from 'styled-components';
const Gameplay = () => {
  return (
    <Main>
      <div className='top-btn'>
      <Totalscore />
      <Numberselector/>
      </div>
      <Role_dice/>
      
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