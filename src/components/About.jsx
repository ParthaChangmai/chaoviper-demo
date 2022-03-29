import React from 'react';
import AnimationPage from '../animation/AnimationPage';

const About = () => {
	return (
		<AnimationPage>
			<div name="about" className="w-full h-screen bg-black text-gray-300 ">
				<div className="flex flex-col justify-center items-center w-full h-full">
					<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
						<div className="sm:text-right pb-8 sm:pl-4">
							<p className="text-4xl font-bold inline border-b-4 border-[#6133f5]">
								About
							</p>
						</div>
						<div></div>
					</div>
					<div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4">
						<div className="sm:text-right text-4xl font-bold">
							<p>Hi, I am Partha, Nice to meet you.Please take a look around</p>
						</div>
						<div>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
							similique molestias tempore eligendi reiciendis hic non autem
							odio. Maiores aperiam dolor magni autem. Eum vitae quidem ullam,
							corrupti optio in?
						</div>
					</div>
				</div>
			</div>
		</AnimationPage>
	);
};

export default About;
