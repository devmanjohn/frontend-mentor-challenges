import React from 'react';

function FilterModel() {
  return (
    <div className='fixed z-50 left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.5)] grid place-items-center'>
      {/* Exit Zone */}
      <span
        onClick={() => {
          console.log('exit');
        }}
        className='w-full h-screen fixed top-0 left-0 z-40'
      ></span>

      <div className='container bg-white rounded relative z-50'>
        {/* Location Input */}
        <div className='flex gap-4 p-6'>
          <svg width='20' height='24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z'
              fill='#5964E0'
              fillRule='nonzero'
            />
          </svg>
          <input
            className='w-full focus-within:outline-none'
            type='text'
            name='location'
            id='location'
            placeholder='Filter by location...'
          />
        </div>

        <hr className='w-full border-[#DADEE3]' />

        {/* Filter Options */}
        <div className='p-6'>
          <label className='custom-checkbox flex gap-4 cursor-pointer'>
            <input
              className='hidden'
              type='checkbox'
              name='full-time'
              id='full-time'
            />
            <span className='w-[24px] h-[24px] bg-[#E8E8EA] rounded grid place-items-center'>
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
            <span className='font-bold'>Full Time Only</span>
          </label>

          <button
            className='bg-[#5964E0] text-white font-bold w-full py-3 rounded mt-8'
            type='button'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModel;
