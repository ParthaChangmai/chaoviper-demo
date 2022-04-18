import React from 'react';
import AnimationPage from '../animation/AnimationPage';

const Contacts = () => {
	return (
		<AnimationPage>
			<div
				name="contact"
				className="w-full h-screen flex justify-center items-center p-4"
			>
				<form
					method="POST"
					action="https://getform.io/f/4e603c32-fc17-4e50-b5d7-1357a9b3b94d"
					className="flex flex-col max-w-[600px] w-full"
				>
					<div className="pb-8">
						<p className="text-4xl font-bold inline border-b-4 border-[#6133f5] text-gray-300">
							Contact
						</p>
						<p className="text-gray-300 py-4">
							Submit the form below or shoot me an email -chaoviper@gmail.com
						</p>
					</div>
					<input
						className="bg-[#ccd6f6] text-black p-2 input input-bordered"
						type="text"
						name="name"
						placeholder="Name"
						required
					/>
					<input
						className="my-4 p-2 text-black bg-[#ccd6f6] input input-bordered"
						type="email"
						name="email"
						placeholder="Email"
						required
					/>
					<textarea
						className="bg-[#ccd6f6] text-black p-2 textarea"
						placeholder="Message"
						name="message"
						rows="10"
						required
					></textarea>
					<button className="text-white border-2 btn btn-outline px-4 py-3 my-8 mx-auto flex items-center">
						Submit
					</button>
				</form>
			</div>
		</AnimationPage>
	);
};

export default Contacts;
