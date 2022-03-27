import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-black">
			bg-[#0a192f]
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#6133f5] ">Hi, My Name is </p>
				<h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
					Partha Changmai
				</h1>
				<h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
					I am a Front end Developer.
				</h2>
				<p className="text-[#8892b0] py-4 max-2-[700px]">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Necessitatibus odit, expedita repellat asperiores assumenda, veniam
					dicta ad quam voluptatem neque nulla quo exercitationem, sequi alias
					qui. Molestiae earum dolorum temporibus.
				</p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6133f5] hover:border-white">
						view work
						<span className="group-hover:rotate-90 duration-500">
							<HiArrowNarrowRight className="ml-3" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
