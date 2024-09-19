import React, { useEffect, useState } from "react";
import { FilterBar, DogList, FavoriteDogs, Pagination, MatchModal } from '../components';
import useDogs from '../hooks/useDogs';
import { fetchBreeds } from '../services/api';
import { Dog } from '../types';

const Search: React.FC = () => {
  const [favorites, setFavorites] = useState<Dog[]>([]);
  const [breeds, setBreeds] = useState<string[]>();
  const [query, setQuery] = useState({});
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [bestPoppy, setBestPoppy] = useState<Dog>();

  const { dogs, total, prev, next, loading, error } = useDogs(query);

  const handleFavorite = (dog: Dog) => {
    setFavorites((prev) => (prev.map((fav) => fav.id).includes(dog.id) ? prev.filter((fav) => fav.id !== dog.id) : [...prev, dog]));
  };

  const handleMatch = (match: string) => {
    setIsOpen(true);
    setBestPoppy(favorites.find((fav) => fav.id == match));
  };

  useEffect(() => {
    const getBreeds = async () => {
      const breeds = await fetchBreeds();
      setBreeds(breeds);
    }

    getBreeds();
  }, []);

  useEffect(() => {
    console.log(query);
  }, [setQuery]);

  return (
    <div className='container'>
      <h1 className='text-3xl'>Dog Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {breeds && <FilterBar breeds={breeds} query={query} setQuery={setQuery} />}
      <DogList dogs={dogs} onFavorite={handleFavorite} />
      {!loading && <Pagination total={total} prev={prev} next={next} setQuery={setQuery} />}
      <FavoriteDogs favorites={favorites} onFavorite={handleFavorite} onMatch={handleMatch} />
      {bestPoppy && <MatchModal poppy={bestPoppy} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Search;