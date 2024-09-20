import React, { useEffect, useState } from "react";
import { FilterBar, DogList, FavoriteDogs, Pagination, MatchModal } from '../components';
import useDogs from '../hooks/useDogs';
import { fetchBreeds } from '../services/api';
import { Dog } from '../types';
import { isEmpty } from "../utils";

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
    console.log("GET Breeds");

    const getBreeds = async () => {
      const breeds = await fetchBreeds();
      setBreeds(breeds);
    }

    getBreeds();
  }, []);

  useEffect(() => {
    console.log(query);
  }, [setQuery, query]);

  return (
    <div className='container'>
      <h1 className='text-3xl'>Dog Search</h1>
      {loading && <p>Loading...</p>}
      {!loading &&
        <>
          {breeds && <FilterBar breeds={breeds} query={query} setQuery={setQuery} />}
          {dogs.length !== 0 && <DogList dogs={dogs} onFavorite={handleFavorite} />}
          {!dogs && <h1 className="text-center text-3xl text-blue-500">No Dogs</h1>}
          {total && <Pagination total={total} prev={prev} next={next} setQuery={setQuery} />}
          {isEmpty(favorites) && <FavoriteDogs favorites={favorites} onFavorite={handleFavorite} onMatch={handleMatch} />}
        </>
      }
      {error && <p>{error}</p>}
    </div>
  );
}

export default Search;