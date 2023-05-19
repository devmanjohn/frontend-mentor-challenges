import React from 'react';

function PrimaryBtn({ children, classes, href }) {
  return (
    <a href={href} className={`inline-flex items-center ${classes}`}>
      <figure className='p-4 bg-[#1D3445] grid place-items-center'>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
          <g fill='none' fill-rule='evenodd' stroke='#5FB4A2'>
            <path d='M0 9l8 4 8-4' />
            <path opacity='.5' d='M0 5l8 4 8-4' />
            <path opacity='.25' d='M0 1l8 4 8-4' />
          </g>
        </svg>
      </figure>
      <span className='inline-block bg-dark-blue p-3.5 px-7 text-white uppercase tracking-[2px] text-sm'>
        {children}
      </span>
    </a>
  );
}

export default PrimaryBtn;
