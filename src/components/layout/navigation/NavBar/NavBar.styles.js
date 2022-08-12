import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  background-color: #09081d;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;  
  height: 4rem;
  top: 0;
  z-index: 1;
`;

export const NavText = styled.h3`
  font-size: 1.2rem;
  &:hover {
    transition: all 0.6s;
    background-color: #ddd9;
  }
  @media screen and (max-width: 530px) {
    font-size: 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  &:hover {
    color: #09081d;
    transition: all 0.2s;
  }
`;
