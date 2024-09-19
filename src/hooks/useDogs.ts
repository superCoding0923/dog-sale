import { useEffect, useState } from 'react';
import { Dog, PaginatedResponse } from '../types';
import { fetchDogsByIds, searchDogs } from '../services/api';

const useDogs = (query: any) => {
  console.log(query);

  const [dogs, setDogs] = useState<Dog[]>([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setLoading(true);
        const response: PaginatedResponse = await searchDogs(query);
        console.log(response);
        if (response.next) {
          setNext(response.next);
        }
        if (response.prev) {
          setPrev(response.prev);
        }
        setTotal(response.total);
        const resposne: Dog[] = await fetchDogsByIds(response.resultIds);
        setDogs(resposne);
      } catch (err) {
        setError('Failed to fetch dogs');
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, [query]);

  return { dogs, total, next, prev, loading, error };
};

export default useDogs;