'use client';

import { useState } from 'react';
import FilterModel from './utils/FilterModel';

type FilterProps = {
  setFilters: (filters: {
    position: string;
    isFulltime: boolean;
    location: string;
    searchQuery: string;
  }) => void;
  filters: {
    position: string;
    isFulltime: boolean;
    location: string;
    searchQuery: string;
  };
};

function Filters({ setFilters, filters }: FilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFulltime, setIsFulltime] = useState(false);
  const [location, setLocation] = useState('');
  const [isFilterModelOpen, setIsFilterModelOpen] = useState(false);

  const handleSearch = () => {
    setFilters({
      ...filters,
      searchQuery: searchQuery,
      location: location,
      isFulltime: isFulltime,
    });
  };

  return (
    <section className='container p-4 md:p-0 rounded bg-white dark:bg-[#19202D] -mt-8'>
      <div className='flex items-center gap-6 md:gap-0'>
        {/* Text Field */}
        <div className='md:flex md:gap-2 md:border-r dark:border-[#2A3442] md:p-6 md:w-full'>
          <svg
            className='text-[#5964E0] hidden md:inline-block'
            fill='currentColor'
            width='32'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z'
              fill='currentColor'
              fillRule='nonzero'
            />
          </svg>
          <input
            className='dark:bg-[#19202D] focus-within:outline-none w-full lg:hidden'
            type='text'
            name='filter'
            id='filter'
            placeholder='Filter by title...'
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Desktop Search Queries */}
          <input
            className='dark:bg-[#19202D] focus-within:outline-none w-full hidden lg:block'
            type='text'
            name='filter'
            id='filter'
            placeholder='Filter by title, companies, expertise... '
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter */}
        <button
          type='button'
          className='ml-auto md:hidden'
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

        {/* Desktop Location */}
        <div className='hidden md:flex gap-4 p-6 md:w-full md:border-r dark:border-[#2A3442] md:p-6 lg:w-3/4'>
          <svg width='20' height='24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z'
              fill='#5964E0'
              fillRule='nonzero'
            />
          </svg>
          <input
            className='w-full focus-within:outline-none dark:bg-[#19202D]'
            type='text'
            name='location'
            id='location'
            placeholder='Filter by location...'
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>

        {/* Desktop Checkbox */}
        <label className='custom-checkbox gap-4 cursor-pointer hidden md:flex md:w-full md:p-6 lg:w-2/4'>
          <input
            className='hidden'
            type='checkbox'
            name='full-time'
            id='full-time'
            checked={isFulltime}
            onChange={() => {
              setIsFulltime((prev) => !prev);
            }}
          />
          <span className='w-[24px] h-[24px] bg-[#E8E8EA] dark:bg-[#303742] rounded grid place-items-center'>
            <svg
              className='text-white hidden'
              width='15'
              height='12'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 6.57l3.572 3.572L13.714 1'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                fillRule='evenodd'
              />
            </svg>
          </span>
          <span className='font-bold'>
            Full Time <span className='md:hidden lg:inline-block'>Only</span>
          </span>
        </label>

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
          className='bg-[#5964E0] p-3 md:mr-6 rounded'
          onClick={handleSearch}
        >
          <svg
            className='text-white md:hidden'
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
          <span className='hidden md:block text-white font-bold lg:px-6'>
            Search
          </span>
        </button>
      </div>
    </section>
  );
}

export default Filters;
