import React from 'react';
import { Match } from '../types';
import { matchDogs } from '../services/api';

interface FavoriteDogsProps {
  favorites: string[];
  onMatch: (match: string) => void;
}

const FavoriteDogs: React.FC<FavoriteDogsProps> = ({ favorites, onMatch }) => {
  const handleMatch = async () => {
    const matchResponse: Match = await matchDogs(favorites);
    onMatch(matchResponse.match);
  };

  return (
    <div>
      <h2>Your Favorite Dogs</h2>
      <button onClick={handleMatch} disabled={favorites.length === 0}>
        Find a Match
      </button>
    </div>
  );
};

export default FavoriteDogs;