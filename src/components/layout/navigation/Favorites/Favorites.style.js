import  styled  from "styled-components";

export const FavoriteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  top: 4rem;
  background-color: #1C2121;
  min-height: 100vh;
  overflow: hidden;
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