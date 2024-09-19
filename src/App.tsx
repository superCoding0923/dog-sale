import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth, DogList, FavoriteDogs } from './pages';
import useDogs from './hooks/useDogs';
import { Dog } from './types';

const App: React.FC = () => {
	const [favorites, setFavorites] = useState<string[]>([]);
	const [query, setQuery] = useState({});
	const { dogs, total, loading, error } = useDogs(query);

	const handleFavorite = (id: string) => {
		setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
	};

	const handleMatch = (match: string) => {
		alert(`You matched with dog ID: ${match}`);
	};

	return (
		<Routes>
			<Route path="/" element={<Auth />} />
			<Route
				path="/search"
				element={
					<div>
						<h1>Dog Search</h1>
						{loading && <p>Loading...</p>}
						{error && <p>{error}</p>}
						<DogList dogs={dogs} onFavorite={handleFavorite} />
						<FavoriteDogs favorites={favorites} onMatch={handleMatch} />
					</div>
				}
			/>
		</Routes>
	);
};

export default App;