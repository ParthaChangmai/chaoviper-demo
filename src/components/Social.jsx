import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Social = () => {
	return (
		<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
			<ul>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0A66C2]">
					<a
						className="flex justify-between items-center w-full text-gray-300"
						href="https://www.linkedin.com/in/partha-changmai-6a9293208"
						target="_blank"
						rel="noreferrer"
					>
						Linkedin <FaLinkedin size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
					<a
						className="flex justify-between items-center w-full text-gray-300"
						href="https://github.com/ParthaChangmai"
						target="_blank"
						rel="noreferrer"
					>
						Github <FaGithub size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
					<a
						className="flex justify-between items-center w-full text-gray-300"
						href="mailto:chaoviper@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						Email <HiOutlineMail size={30} />
					</a>
				</li>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
					<a
						className="flex justify-between items-center w-full text-gray-300"
						href="https://drive.google.com/file/d/1RGNh4R7MMAwHV3Mg2pNLF-QRXQ9QZHgp/view"
						target="_blank"
						rel="noreferrer"
					>
						Resume <BsFillPersonLinesFill size={30} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Social;
