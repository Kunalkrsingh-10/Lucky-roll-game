import styled from 'styled-components'
import React, { useState } from 'react';

const Numberselector = () => { 
    const Arr = [1, 2, 3, 4, 5, 6]; 
    const [selectNumber, setSelectNumber] = useState();

    const handleClick = (value) => {
        setSelectNumber(value);
        
    };

    return (
        <Numberselectcontainer>
            <div className='flex'>
            {Arr.map((value, i) => (
                <Box key={i} onClick={() => handleClick(value)} 
                isSelected={selectNumber === value}
                >
                    {value}
                </Box>
            ))}
        </div>
        <p>Select Number</p>
        </Numberselectcontainer>
    );
}

export default Numberselector;

const Box = styled.div`
   width: 72px;
   height: 72px;
   border: 2px solid black;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 24px;
   font-weight: 700;
   flex-direction: row;
   cursor: pointer;
   background-color:${({ isSelected }) => (isSelected ? 'black' : 'white')};
   color:${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;
const Numberselectcontainer = styled.div`
display: flex;
flex-direction: column; 
align-items:end;
.flex{
    display: flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:bold;
}
`;


