import React, { useState, useEffect } from "react";

interface FilterBarProps {
  breeds: string[];
  query: any;
  setQuery: (query: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ breeds, query, setQuery }) => {
  return (
    <div className='flex flex-wrap justify-end gap-10'>
      <div className='flex items-center gap-3'>
        <label htmlFor="sort">Sort:</label>
        <select className='p-2 border rounded-md' id="sort" onChange={(e) => setQuery({ ...query, sort: e.target.value })}>
          <option value="breed:asc">Breed Asc</option>
          <option value="breed:desc">Breed Desc</option>
          <option value="name:asc">Name Asc</option>
          <option value="name:desc">Name Desc</option>
          <option value="age:asc">Age Asc</option>
          <option value="age:desc">Age Desc</option>
        </select>
      </div>
      <div className='flex items-center gap-3'>
        <label htmlFor="breeds">breed:</label>
        <select className='p-2 border rounded-md' id="breeds" onChange={(e) => setQuery({ ...query, breeds: e.target.value })} multiple>
          {
            breeds && breeds.map((breed, index) => <option key={index} value={breed}>{breed}</option>)
          }
        </select>
      </div>
    </div >
  );
}
export default FilterBar;