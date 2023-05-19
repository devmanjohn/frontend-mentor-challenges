'use client';

// Imports
import Link from 'next/link';
import Image from 'next/image';

// State
import { useState } from 'react';

// Components
import NavLink from './utils/NavLink';

function Header() {
  const [isNavClosed, setIsNavClosed] = useState(true);

  return (
    <header className='custom-container py-6 border-b flex items-center justify-between relative md:border-0 md:py-14 '>
      {/* Logo */}
      <Link href='/'>
        <Image
          src='./assets/images/logo.svg'
          alt='portfolio-logo'
          width={60}
          height={32}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex gap-10'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/portfolio'>Portfolio</NavLink>
        <NavLink href='/contact'>Contact Me</NavLink>
      </nav>

      {/* Hamburger */}
      <button
        type='button'
        className='md:hidden'
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

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden absolute right-0 top-16 bg-dark-blue text-white flex gap-6 flex-col justify-center text-center uppercase tracking-[2px] w-[223px] overflow-hidden transition-all duration-300 ${
          isNavClosed ? 'h-[0px]' : 'h-[186px]'
        }`}
      >
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/portfolio'>Portfolio</NavLink>
        <NavLink href='/contact'>Contact Me</NavLink>
      </nav>
    </header>
  );
}

export default Header;
