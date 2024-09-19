import React, { useState } from 'react';
import { DogList } from '../components';

import { Dog, Match } from '../types';
import { matchDogs } from '../services/api';

interface FavoriteDogsProps {
  favorites: Dog[];
  onMatch: (match: string) => void;
  onFavorite: (dog: Dog) => void;
}

const FavoriteDogs: React.FC<FavoriteDogsProps> = ({ favorites, onFavorite, onMatch }) => {

  const handleMatch = async () => {
    const matchResponse: Match = await matchDogs(favorites.map((fav) => fav.id));
    onMatch(matchResponse.match);
  };


  return (
    <div className='w-100'>
      <h1 className='text-3xl'>Your Favorite Dogs</h1>
      <DogList dogs={favorites} onFavorite={onFavorite} />
      <button className='w-[400px] mx-auto border rounded-md px-10 py-3 bg-blue-500 text-white' onClick={handleMatch} disabled={favorites.length === 0}>
        Find a Match
      </button>
    </div>
  );
};

export default FavoriteDogs;