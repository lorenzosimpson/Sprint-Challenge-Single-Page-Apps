import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 90px;
  font-size: 2rem;
  border-radius: 5px;
  font-weight: bold;
  background: white;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 10px 110px;
  }
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
      <div className='button-container'>
      <Link to={'/characters'}>
          <StyledButton>Enter</StyledButton>
        </Link>
      </div>
    </section>
  );
}

{/* <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /> */}