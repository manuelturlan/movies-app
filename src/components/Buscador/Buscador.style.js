import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  top: 4rem;
  height: 100%;
  min-height: 100vh;
  background-color: #1c2121;
  overflow: hidden;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #2f2e3e;
  width: 100%;
  position: fixed;
  z-index: 1;
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const SpanText = styled.span`
  display: flex;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  @media screen and (max-width: 540px) {
    flex-direction: column;
    text-align: center;
    font-size: 0.8rem;
    align-self: center;
  }
`;

export const InputText = styled.input`
  border: 2px solid gray;
  color: #000;
  outline: none;
  @media screen and (max-width: 540px) {
    margin-top: 0.5rem;
    flex-direction: column;
    align-self: center;
    font-size: 0.8rem;
  }
  ::placeholder {
    @media screen and (max-width: 530px) {
      font-size: 0.8rem;
    }
    color: #000;
  }
`;

export const InputButton = styled.input`
  background-color: #ac6601;
  color: #fff;
  font-weight: 600;
  width: 5rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 540px) {
    margin-top: 0.5rem;
    flex-direction: column;
    align-self: center;
    font-size: 0.8rem;
    text-align: center;
    height: 1rem;
    width: 4rem;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: start;
  column-gap: 1rem;
  position: relative;
  height: 60%;
  margin-left: 3rem;
  margin-right: 3rem;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 790px) {
    grid-template-columns: 1fr 1fr;
    margin-right: 1rem;
  }
  @media screen and (max-width: 560px) {
    top: 2rem;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 490px) {
    top: 2rem;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 480px) {
    top: 2rem;
    grid-template-columns: 1fr;
  }
`;
