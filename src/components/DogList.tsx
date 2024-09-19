import React from 'react';
import DogCard from './DogCard';
import { Dog } from '../types';

interface DogListProps {
  dogs: Dog[];
  onFavorite: (dog: Dog) => void;
}

const DogList: React.FC<DogListProps> = ({ dogs, onFavorite }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

export default DogList;