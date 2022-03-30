import { motion } from 'framer-motion';

const animations = {
	initial: { x: -1000, opacity: 0, zIndex: 0 },
	animate: { x: 0, opacity: 1, zIndex: 1 },
	exit: { x: 1000, opacity: 0, zIndex: 0 },
};

const AnimationPage = ({ children }) => {
	return (
		<motion.div
			key={Math.random()}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ type: 'keyframes', ease: 'easeInOut', duration: 0.4 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimationPage;
