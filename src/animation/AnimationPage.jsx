import { motion } from 'framer-motion';

const animations = {
	initial: { x: 1000, opacity: 0 },
	animate: { zIndex: 1, x: 0, opacity: 1 },
	exit: { zIndex: 0, x: 1000, opacity: 0 },
};

const AnimationPage = ({ children }) => {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimationPage;
