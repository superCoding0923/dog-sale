import React from 'react';
import { Dog } from '../types';

interface DogCardProps {
  dog: Dog;
  onFavorite: (id: string) => void;
}

const DogCard: React.FC<DogCardProps> = ({ dog, onFavorite }) => {
  return (
    <div className="dog-card">
      <img src={dog.img} alt={dog.name} />
      <h3>{dog.name}</h3>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <button onClick={() => onFavorite(dog.id)}>Favorite</button>
    </div>
  );
};

export default DogCard;