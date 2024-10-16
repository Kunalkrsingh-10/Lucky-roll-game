import React,{useState} from 'react'
import styled from 'styled-components'


const Role_dice = ({currentdice, roll_dice}) => {
   
    
      
    return (
    <DiceContainer>
        <div className='dice' onClick={roll_dice}>
        <img src={ `../images/dice_${currentdice}.png` } alt="dice1" /> 
        </div>
        <p>click on dice to roll</p>
        <button className="primary">Reset Score</button>
        <button className="sescondary">Show rule</button>
    </DiceContainer>
  )
}

export default Role_dice
const DiceContainer=styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
height:100vh;
overflow: hidden; 
p{
    width:280px;
}
button {
    width: 250px;
    margin-top: 10px;
    height:30px;
  }

  .primary {
    background: black;
    color: white;
  }

  .secondary {
    background: white;
    color: black;
  }

`;
