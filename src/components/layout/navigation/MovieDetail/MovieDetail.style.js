import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 4rem;
  background-color: #1c2121;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 3rem;
  margin-left: 5rem;
  margin-right: 5rem;
  overflow: hidden;
  @media screen and (max-width: 390px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Title = styled.h3`
  display: flex;
  align-self: center;
  color: #ddd;
  font-weight: 600;
  margin: 0;
  @media screen and (max-width: 390px) {
    font-size: 1rem;
  }
`;

export const Img = styled.img`
  margin-top: 1.5rem;
  display: flex;
  align-self: center;
  width: 10rem;
  height: 15rem;
  @media screen and (max-width: 390px) {
    width: 10rem;
  }
`;

export const Par = styled.p`
  display: flex;
  color: #fff;
  align-self: flex-start;
`;
