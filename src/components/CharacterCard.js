import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledCard = styled.div`
border: 1px solid grey;
border-radius: 5px;
margin: 2%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding: 30px;
width: 300px;
height: 300px;
background: white;
`
export default function CharacterCard(props) {
 return (

  <StyledContainer>
    {props.name.map(character => (
      <StyledCard>
      <h1>{character}</h1>
      </StyledCard>
    ))}
  </StyledContainer>

 )
}