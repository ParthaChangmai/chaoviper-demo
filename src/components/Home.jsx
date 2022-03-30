import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import AnimationPage from '../animation/AnimationPage';

const Home = () => {
	return (
		<AnimationPage>
			<div
				name="home"
				className="w-full min-h-screen max-w-[1000px] mx-auto px-8 flex flex-col justify-center"
			>
				<div>
					<p className="text-[#6133f5] ">Hi, My Name is </p>
					<h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
						Partha Pratim Changmai
					</h1>
					<h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
						I am a Front-end Developer.
					</h2>
					<p className="text-[#8892b0] py-4 max-2-[700px]">
						I’m a Front-end developer pursuing in building (and occasionally
						designing) exceptional digital experiences. Presently, I’m focused
						on building responsive front-end Web Applications.
					</p>
					<div>
						<Link to="contact">
							<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6133f5] hover:border-white">
								Contact Me
								<span className="group-hover:rotate-90 duration-500">
									<HiArrowNarrowRight className="ml-3" />
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</AnimationPage>
	);
};

export default Home;
