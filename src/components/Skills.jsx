import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
	return (
		<div name="skills" className=" w-full h-screen bg-black text-gray-300">
			<div className="max-2-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#6133f5]">
						Experience
					</p>
					<p className="py-4">These are the technologies I've worked with </p>
				</div>
				<div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-20 text-center py-8 px-8">
					<div className="shadow-md md:shadow-white hover:scale-110 duration-500">
						<img className="w-20 mx-auto md:pt-5 " src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md md:shadow-white hover:scale-110 duration-500">
						<img className="w-20 mx-auto md:pt-5" src={CSS} alt="HTML icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md md:shadow-white hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto md:pt-5"
							src={JavaScript}
							alt="HTML icon"
						/>
						<p className="my-4">Java Script</p>
					</div>
					<div className="shadow-md md:shadow-white hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto md:pt-5"
							src={ReactImg}
							alt="HTML icon"
						/>
						<p className="my-4">ReactJs</p>
					</div>
					<div className="shadow-md md:shadow-white hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto md:pt-5"
							src={GitHub}
							alt="HTML icon"
						/>
						<p className="my-4">GitHub</p>
					</div>
					<div className="shadow-md md:shadow-white hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto md:pt-5"
							src={Tailwind}
							alt="HTML icon"
						/>
						<p className="my-4">Tailwind</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
