'use client';

// Imports
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

// State
import { useEffect, useState } from 'react';

// Components
import NavLink from './utils/NavLink';

function Header() {
  const [isNavClosed, setIsNavClosed] = useState(true);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let headerTl = gsap
        .timeline()
        .fromTo(
          '.nav-link',
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.3 },
          '<'
        );
    });
  }, []);

  return (
    <header className='custom-container py-6 flex items-center justify-between relative md:py-14'>
      {/* Logo */}
      <Link className='logo' href='/'>
        <Image
          src='./assets/images/logo.svg'
          alt='portfolio-logo'
          width={60}
          height={32}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex gap-10 overflow-hidden'>
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
            return !prev;
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
        className={`md:hidden absolute right-0 top-16 bg-dark-blue text-white flex gap-6 flex-col justify-center text-center uppercase tracking-[2px] w-[223px] overflow-hidden transition-all duration-300 z-10 ${
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
