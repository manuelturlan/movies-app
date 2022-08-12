import styled from "styled-components";
import { Link } from "react-router-dom";

export const FavoriteCard = styled.div`
  display: grid;
  padding: 2rem;
  overflow: hidden;
  width: 100%;
  justify-content: start;
  height: 20rem;
  margin-left: 3rem;
  margin-right: 3rem;
  @media screen and (max-width: 930px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
  @media screen and (max-width: 470px) {
    justify-content: center;
    width: 80%;
  }   
  @media screen and (max-width: 300px) {
    justify-content: center;
    width: 70%;
  }   
  @media screen and (max-width: 240px) {
    justify-content: center;
    width: 60%;
  } 
  @media screen and (max-width: 220px) {
    justify-content: center;
    width: 50%;
  } 
`;

export const NavLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  cursor: default;
`;

export const Title = styled.h3`
  display: grid;
  font-size: 0.9rem;
  justify-self: center;
  white-space: nowrap;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: default;
`;

export const Img = styled.img`
  display: grid;
  justify-self: center;
  height: 15rem;
  width: 11rem;
  border-radius: 10%;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    transition: all 0.5s;
    opacity: 0.6;
  }
  @media screen and (max-width: 470px) {
    justify-self: start;
    width: 100%;
  }   
`;

export const Button = styled.button`
  display: grid;
  justify-self: center;
  background-color: #ac6601;
  color: #fff;
  border: none;
  width: 10rem;
  height: 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
