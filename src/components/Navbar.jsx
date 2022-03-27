import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import pc from '../assets/pc.png';
import Social from './Social';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#171717] text-gray-300">
			<div>
				<img src={pc} alt="logo image" style={{ width: '80px' }} />
			</div>
			{/* menu */}
			<ul className="hidden md:flex ">
				<li>
					<Link to="home" smooth={true} offset={50} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} offset={50} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} offset={50} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="work" smooth={true} offset={50} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} offset={50} duration={500}>
						Contact
					</Link>
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
					<Link
						onClick={handleClick}
						to="home"
						smooth={true}
						offset={50}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="about"
						smooth={true}
						offset={50}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="skills"
						smooth={true}
						offset={50}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="work"
						smooth={true}
						offset={50}
						duration={500}
					>
						Work
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="contact"
						smooth={true}
						offset={50}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
			{/* Social icons*/}
			<Social />
		</div>
	);
};

export default Navbar;
