import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import pc from '../assets/pc.png';
import Social from './Social';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	let activeClassName = 'border-b-4 border-[#6133f5]';

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#171717] text-gray-300">
			<div className="hover:cursor-pointer">
				<Link to="/">
					<img src={pc} alt="logo" style={{ width: '80px' }} />
				</Link>
			</div>
			{/* menu */}
			<ul className="hidden md:flex ">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : 'hover:border-b-4 border-[#6133f5]'
						}
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : 'hover:border-b-4 border-[#6133f5]'
						}
						to="about"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : 'hover:border-b-4 border-[#6133f5]'
						}
						to="skills"
					>
						Skills
					</NavLink>
				</li>
				{/* <li>
						<NavLink to="work">Work</NavLink>
					</li> */}
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : 'hover:border-b-4 border-[#6133f5]'
						}
						to="contact"
					>
						Contact
					</NavLink>
				</li>
			</ul>
			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/*  Mobile menu  */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'
				}
			>
				<li onClick={handleClick} className="py-6 text-4xl">
					<Link to="/">Home</Link>
				</li>
				<li onClick={handleClick} className="py-6 text-4xl">
					<Link to="about">About</Link>
				</li>
				<li onClick={handleClick} className="py-6 text-4xl">
					<Link to="skills">Skills</Link>
				</li>
				{/* <li onClick={handleClick} className="py-6 text-4xl">
						<Link to="work">Work</Link>
					</li> */}
				<li onClick={handleClick} className="py-6 text-4xl">
					<Link to="contact">Contact</Link>
				</li>
			</ul>
			{/* Social icons*/}
			<Social />
		</div>
	);
};

export default Navbar;
