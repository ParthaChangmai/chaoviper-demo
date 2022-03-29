import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnimationPage from '../animation/AnimationPage';

import pc from '../assets/pc.png';
import Social from './Social';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<AnimationPage>
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#171717] text-gray-300">
				<div className="hover:cursor-pointer">
					<Link to="/">
						<img src={pc} alt="logo" style={{ width: '80px' }} />
					</Link>
				</div>
				{/* menu */}
				<ul className="hidden md:flex ">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="skills">Skills</Link>
					</li>
					{/* <li>
						<Link to="work">Work</Link>
					</li> */}
					<li>
						<Link to="contact">Contact</Link>
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
		</AnimationPage>
	);
};

export default Navbar;
