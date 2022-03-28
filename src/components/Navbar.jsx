import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import pc from '../assets/pc.png';
import Social from './Social';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#171717] text-gray-300">
			<div className="hover:cursor-pointer">
				<a href="/">
					<img src={pc} alt="logo image" style={{ width: '80px' }} />
				</a>
			</div>
			{/* menu */}
			<ul className="hidden md:flex ">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/skills">Skills</a>
				</li>
				<li>
					<a href="/work">Work</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
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
				<li className="py-6 text-4xl">
					<a href="/">Home</a>
				</li>
				<li className="py-6 text-4xl">
					<a href="/about">About</a>
				</li>
				<li className="py-6 text-4xl">
					<a href="/skills">Skills</a>
				</li>
				<li className="py-6 text-4xl">
					<a href="/work">Work</a>
				</li>
				<li className="py-6 text-4xl">
					<a href="/contact">Contact</a>
				</li>
			</ul>
			{/* Social icons*/}
			<Social />
		</div>
	);
};

export default Navbar;
