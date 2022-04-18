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
		'fixed w-full h-[50px] sm:h-[80px] flex justify-between items-center px-4  bg-[#171717] ';
	const navBarBlue =
		'fixed w-full h-[50px] sm:h-[80px] flex justify-between items-center px-4  bg-[#182647] ';

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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
						</svg>
						<p className="pl-1">Home</p>
					</NavLink>
				</li>

				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : nonActiveClass
						}
						to="about"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="pl-1">About</p>
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : nonActiveClass
						}
						to="skills"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="pl-1">Skills</p>
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="pl-1">Contact</p>
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
