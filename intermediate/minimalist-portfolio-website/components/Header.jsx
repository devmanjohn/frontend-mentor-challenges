'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [isNavClosed, setIsNavClosed] = useState(true);

  return (
    <header className='custom-width py-6 border-b flex items-center justify-between relative md:border-0 md:py-14 '>
      <Link href='/'>
        <Image
          src='./assets/images/logo.svg'
          alt='portfolio-logo'
          width={60}
          height={32}
        />
      </Link>
      <nav className='hidden md:flex uppercase gap-10 tracking-[2px]'>
        <Link href='/'>Home</Link>
        <Link href='/portfolio'>Portfolio</Link>
        <Link href='/contact'>Contact Me</Link>
      </nav>

      <button
        className='md:hidden'
        type='button'
        onClick={() => {
          setIsNavClosed((prev) => {
            setIsNavClosed(!prev);
          });
        }}
      >
        <Image
          src={`${
            isNavClosed
              ? './assets/images/icons/hamburger.svg'
              : './assets/images/icons/close.svg'
          }`}
          alt='portfolio-logo'
          width={24}
          height={13}
        />
      </button>

      <nav
        className={`md:hidden absolute right-0 top-16 bg-dark-blue text-white flex gap-6 flex-col justify-center text-center uppercase tracking-[2px] w-[223px] overflow-hidden transition-all duration-300 ${
          isNavClosed ? 'h-[0px]' : 'h-[186px]'
        }`}
      >
        <Link href='/'>Home</Link>
        <Link href='/portfolio'>Portfolio</Link>
        <Link href='/contact'>Contact Me</Link>
      </nav>
    </header>
  );
}

export default Header;