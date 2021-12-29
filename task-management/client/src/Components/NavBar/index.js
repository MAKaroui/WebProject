import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBar';

const NavBar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavBtn>
			<NavBtnLink to='/'>Home</NavBtnLink>
		</NavBtn>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
		
	</Nav>
	</>
);
};

export default NavBar;
