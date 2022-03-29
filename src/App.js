import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<>
			<AnimatePresence exitBeforeEnter initial={false}>
				<Navbar />

				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contacts />} />
				</Routes>
			</AnimatePresence>

			{/* <Home />
			<About />
			<Skills />
			<Work />
			<Contacts /> */}
		</>
	);
}

export default App;
