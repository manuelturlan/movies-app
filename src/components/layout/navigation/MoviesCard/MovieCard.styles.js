import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardsContainer = styled.div`
  display: grid;
  background-color: #1c2121;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
  width: 50%;
  @media screen and (max-width: 790px) {
    justify-content: start;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  cursor: default;
  &:hover {
    text-decoration: underline;
  }
`;

export const Par = styled.p`
  display: grid;
  justify-self: center;
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  white-space: nowrap;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Button = styled.button`
  display: grid;
  justify-self: center;
  margin-top: 1rem;
  background-color: #ac6601;
  color: #fff;
  border: none;
  width: 10rem;
  height: 1.2rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Img = styled.img`
  height: 15rem;
  width: 11rem;
  border-radius: 10%;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    opacity: 0.6;
  }
  @media screen and (max-width: 480px) {
    justify-self: end;
  }
`;
