import React from 'react';
import DogCard from './DogCard';
import { Dog } from '../types';

interface DogListProps {
  dogs: Dog[];
  onFavorite: (id: string) => void;
}

const DogList: React.FC<DogListProps> = ({ dogs, onFavorite }) => {
  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default DogList;