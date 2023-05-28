import Image from 'next/image';
import React from 'react';
import LogoBox from './utils/LogoBox';

type CardProps = {
  company: String;
  logo: String;
  logoBackground: String;
  postedAt: String;
  location: String;
  contract: String;
  position: String;
};

function JobCard({
  company,
  logo,
  logoBackground,
  postedAt,
  location,
  contract,
  position,
}: CardProps) {
  return (
    <div className='bg-white px-[24px] py-[48px] pb-[24px] relative rounded flex flex-col'>
      <div className='flex gap-2 items-center text-[#6E8098]'>
        <p>{postedAt}</p>
        <span className='bg-[#6E8098] w-1 h-1 rounded-full block'></span>
        <p>{contract}</p>
      </div>
      <LogoBox company={company} logo={logo} logoBackground={logoBackground} />
      <h3 className='font-bold text-lg mt-2'>{position}</h3>
      <p className='text-[#6E8098] mt-2'>{company}</p>
      <p className='mt-8 text-[#5964E0] font-bold'>{location}</p>
    </div>
  );
}

export default JobCard;
