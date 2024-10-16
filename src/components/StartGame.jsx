import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
max-width:1180px;
display: flex;
justify-content:center;
align-items:center;
margin: 0 auto;
.content  h1{ 
    font-size:96px;
    white-space:nowrap;

}
   

` ;
const Button = styled.button` 
min-width:220px;
 height:44px;
 padding: 10px 18px;
 background-color:black; 
 border-radius: 5px;
 color:white; 
 border: none;
 font-size:16px; 
 border: 1px solid transparent;
 cursor: pointer;
 
 &: hover{
    background-color:white;
    border : 1px solid black; 
    color: black ;
    transition: 0.3 background ease-in; 
    
 }
`;
const StartGame = ({toggle}) => {
  return (
    
        <Container>
        <div>
        <img src="../images/dices.png" alt="home img"/> 
        </div>
        
        <div className='content'>
        <h1 >DICE GAME</h1>
        <Button 
        onClick={toggle}
        >Play Now</Button>
        </div>
        </Container>

  )
}

export default StartGame