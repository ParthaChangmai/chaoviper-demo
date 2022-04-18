import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { GiNightSky } from 'react-icons/gi';
import { MdModeNight } from 'react-icons/md';

import { themeChange } from 'theme-change';

import Social from './Social';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [btn, setBtn] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const handleClick = () => setNav(!nav);

	const handleBtnAndNavbar = () => {
		setBtn(!btn);
		setNavbar(!navbar);
	};

	let activeClassName =
		' tab tab-lifted tab-active hover:text-white text-white';
	const nonActiveClass =
		'hover:text-white tab tab-lifted hover:tab-active text-white';

	const navBarBlack =
		'fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#171717] ';
	const navBarBlue =
		'fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#182647] ';

	// useEffect(() => {
	// 	const themeData = window.localStorage.getItem('theme-data');
	// 	const savedValues = JSON.parse(themeData);
	// 	setBtn(savedValues.btn);
	// 	setNavbar(savedValues.navbar);
	// }, []);

	// useEffect(() => {
	// 	const valuesToSave = { btn, navbar };
	// 	window.localStorage.setItem('theme-data', JSON.stringify(valuesToSave));
	// });

	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className={!navbar ? navBarBlue : navBarBlack}>
			<div className="hover:cursor-pointer ">
				<div
					onClick={handleBtnAndNavbar}
					className="text-2xl sm:text-4xl md:pl-10"
				>
					{!btn ? (
						<button
							data-toggle-theme="night,black"
							data-act-class="ACTIVECLASS"
						>
							<GiNightSky />
						</button>
					) : (
						<button
							data-toggle-theme="night,black"
							data-act-class="ACTIVECLASS"
						>
							<MdModeNight />
						</button>
					)}
				</div>
			</div>
			{/* menu */}
			<ul className="hidden md:flex ">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : nonActiveClass
						}
						to="/"
					>
						Home
					</NavLink>
				</li>

				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : nonActiveClass
						}
						to="about"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : nonActiveClass
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
							isActive ? activeClassName : nonActiveClass
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
