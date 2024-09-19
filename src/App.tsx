import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth, Search } from "./pages";


const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Auth />} />
			<Route path="/search" element={<Search />} />
		</Routes>
	);
};

export default App;