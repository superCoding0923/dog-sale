import { useEffect, useState } from 'react';
import { Dog, PaginatedResponse } from '../types';
import { fetchDogsByIds, searchDogs } from '../services/api';

const useDogs = (query: any) => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setLoading(true);
        const response: PaginatedResponse<Dog> = await searchDogs(query);
        setDogs(response.resultIds);
        setTotal(response.total);
      } catch (err) {
        setError('Failed to fetch dogs');
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, [query]);

  return { dogs, total, loading, error };
};

export default useDogs;