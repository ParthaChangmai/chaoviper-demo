import React from 'react';
import AnimationPage from '../animation/AnimationPage';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const About = () => {
	return (
		<AnimationPage>
			<div
				name="about"
				className="w-full min-h-screen text-gray-300 flex justify-center items-center"
			>
				<div>
					<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
						<div className="sm:text-right pb-8 sm:pl-4">
							<h2 className="text-4xl font-bold inline border-b-4 border-[#6133f5]">
								About
							</h2>
						</div>
						<div></div>
					</div>
					<div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
						<div className="sm:text-right text-4xl font-bold">
							<p>Hi, I am Partha, Nice to meet you.Please take a look around</p>
						</div>
						<div>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
							similique molestias tempore eligendi reiciendis hic non autem
							odio. Maiores aperiam dolor magni autem. Eum vitae quidem ullam,
							corrupti optio in?
						</div>
						<div className="sm:hidden flex pt-11">
							<a
								className="text-[#0A66C2] bg-white"
								href="https://www.linkedin.com/in/partha-changmai-6a9293208"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin size={30} />
							</a>
							<a
								className="text-gray-200 pl-3"
								href="https://github.com/ParthaChangmai"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub size={30} />
							</a>
							<a
								className="text-[#6fc2b0] pl-3"
								href="mailto:chaoviper@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<HiOutlineMail size={30} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</AnimationPage>
	);
};

export default About;
