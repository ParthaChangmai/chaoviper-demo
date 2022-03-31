import { motion } from 'framer-motion';

const animations = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const AnimationPage = ({ children }) => {
	return (
		<motion.div
			key={Math.random()}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ type: 'keyframes' }}
		>
			{children}
		</motion.div>
	);
};

export default AnimationPage;
