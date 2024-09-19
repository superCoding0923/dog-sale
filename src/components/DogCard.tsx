import React from 'react';
import { Dog } from '../types';

interface DogCardProps {
  dog: Dog;
  onFavorite: (dog: Dog) => void;
}

const DogCard: React.FC<DogCardProps> = ({ dog, onFavorite }) => {
  return (
    <div className="border border-[#ccc] rounded-sm m-[10px] p-[10px] w-[250px] text-center">
      <img className='w-full h-[200px]' src={dog.img} alt={dog.name} />
      <h3>{dog.name}</h3>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <button onClick={() => onFavorite(dog)}>Favorite</button>
    </div>
  );
};

export default DogCard;