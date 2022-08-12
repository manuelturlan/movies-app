import React from 'react';
import { NavContainer, NavText, NavLink } from './NavBar.styles';
const NavBar = () => {
    return (
        <NavContainer>
            <NavText><NavLink to="/">📕 Inicio 📕</NavLink></NavText>
            <NavText><NavLink to="/favorites">✨ Favoritas ✨</NavLink></NavText>
        </NavContainer>
    );
}

export default NavBar;
