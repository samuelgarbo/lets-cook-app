import React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';

function Header(props) {
    return (
        <>
           <NavBar/>
           <Hero/> 
        </>
    );
}

export default Header;