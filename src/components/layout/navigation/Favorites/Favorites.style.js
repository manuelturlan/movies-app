import styled from "styled-components";

export const FavoriteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  top: 4rem;
  background-color: #1c2121;
  min-height: 100vh;
  row-gap: 1rem;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 0;
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

export const ErrorTitle = styled.h1`
  color: #fff;
  grid-column: 2/4;
  font-size: 1.5rem;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    grid-column: 2/3;
    justify-self: center;
  }
  @media screen and (max-width: 700px) {
    grid-column: 1/3;
    font-size: 1.2rem;
    justify-self: center;
  }
`;
