import React from 'react';

interface PaginationProps {
  total: number;
  prev: string;
  next: string;
  setQuery: (query: any) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, prev, next, setQuery }) => {
  const totalPages = Math.ceil(total / 25);

  return (
    <div className="flex justify-center mt-20">
      <div className='flex justify-between w-[400px]'>
        <button className='disabled:text-gray-400' disabled={prev ? false : true} onClick={() => prev && setQuery(prev)}>Prev</button>
        <h1>{totalPages}</h1>
        <button className='disabled:text-gray-400' disabled={next ? false : true} onClick={() => next && setQuery(next)}>Next</button>
      </div>
    </div >
  );
};

export default Pagination;