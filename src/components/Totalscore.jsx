import React from 'react'
import styled from 'styled-components'
const Scorecontainer = styled.div`
max-width:200px;
h1{
    font-size:100px;
    line-height:80px;
}
p{
    font-size:24px;
    font-weight:bold;
}
`;
const Totalscore = () => {
  return (
    <Scorecontainer>
        <h1> 0</h1>
        <p>Total score</p>
    </Scorecontainer>
  )
}

export default Totalscore