'use client';

import { useState } from 'react';
import FilterModel from './utils/FilterModel';

type FilterProps = {
  setJobLimit: (jobLimit: number) => void;
  setFilters: (filters: {
    position: string;
    isFulltime: boolean;
    location: string;
  }) => void;
  filters: {
    position: string;
    isFulltime: boolean;
    location: string;
  };
};

function Filters({ setJobLimit, setFilters, filters }: FilterProps) {
  const [inputValue, setInputValue] = useState('');
  const [isFilterModelOpen, setIsFilterModelOpen] = useState(false);

  const handleSearch = () => {
    setJobLimit(20);
    setFilters({
      ...filters,
      position: inputValue,
    });
  };

  return (
    <section className='container p-4 rounded bg-white dark:bg-[#19202D] -mt-8'>
      <div className='flex items-center gap-6'>
        {/* Text Field */}
        <input
          className='dark:bg-[#19202D] focus-within:outline-none w-full'
          type='text'
          name='filter'
          id='filter'
          placeholder='Filter by title...'
          onChange={(e) => setInputValue(e.target.value)}
        />

        {/* Filter */}
        <button
          type='button'
          className='ml-auto'
          onClick={() => {
            setIsFilterModelOpen((prev) => !prev);
          }}
        >
          <svg
            className='text-[#6E8098] dark:text-white'
            width='20'
            height='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z'
              fill='currentColor'
              fillRule='nonzero'
            />
          </svg>
        </button>

        {/* Filter Model */}
        {isFilterModelOpen && (
          <FilterModel
            setIsOpen={setIsFilterModelOpen}
            filters={filters}
            setFilters={setFilters}
          />
        )}

        {/* Search */}
        <button
          type='button'
          className='bg-[#5964E0] p-3 rounded'
          onClick={handleSearch}
        >
          <svg
            className='text-white'
            fill='currentColor'
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z'
              fill='currentColor'
              fillRule='nonzero'
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Filters;
