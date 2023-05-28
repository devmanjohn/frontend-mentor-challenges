import Image from 'next/image';
import React from 'react';

type LogoProps = {
  company: String;
  logo: String;
  logoBackground: String;
};

function LogoBox({ logoBackground, company, logo }: LogoProps) {
  return (
    <div
      style={{ backgroundColor: `${logoBackground}` }}
      className='flex justify-center items-center w-[50px] h-[50px] p-3 rounded-xl absolute -top-5 left-5'
    >
      <div className='relative w-full h-full'>
        <Image
          src={`${logo}`}
          alt={`${company}-logo`}
          fill
          className='object-contain'
        />
      </div>
    </div>
  );
}

export default LogoBox;
