import React from 'react';
import WorkImg from '../assets/workImg.jpeg';

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-black ">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#6133f5] text-gray-300">
						Work
					</p>
					<p className="py-6">Check out some of my recent work</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* grid item */}
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-md md:shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-60">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Js Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-md md:shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-75 transition-all-500">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Js Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-md md:shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-75 transition-all-500">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Js Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-md md:shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-75 transition-all-500">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Js Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-md md:shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-75">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Js Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-md md:shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect */}
						<div className="opacity-0 group-hover:opacity-75">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Js Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-800 font-bold text-lg ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
