'use client';

// Imports
import Image from 'next/image';
import { useEffect } from 'react';

// Animation
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

// Components
import AboutSection from '@/components/AboutSection';
import PrimaryBtn from '@/components/utils/PrimaryBtn';

export default function Home() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let headerTl = gsap
        // Hero Animations
        .timeline()
        .fromTo(
          '.hero-figure .animation-span',
          { width: '100%' },
          { width: 0, duration: 1, delay: 0.3 }
        )
        .fromTo(
          '.hero-content',
          { x: '-100%', opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .fromTo('.hero-content h1', { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(
          '.hero-content a',
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '<'
        );

      // Profile Trigger
      gsap.fromTo(
        '.profile-picture .animation-span',
        {
          width: '100%',
        },
        {
          scrollTrigger: {
            trigger: '#about-me',
            start: 'top 50%+=150px',
          },
          width: 0,
          duration: 1,
        }
      );
    });
  }, []);

  return (
    <main className='flex-grow'>
      {/* Landing Section */}
      <section className='mt-4'>
        <div className='custom-container'>
          <figure className='hero-figure relative h-[271px] md:h-[600px] overflow-hidden'>
            <span className='animation-span w-0 h-full absolute top-0 left-0 bg-white block z-10'></span>
            <Image
              className='md:hidden object-cover'
              src='/assets/images/homepage/mobile/image-homepage-hero@2x.jpg'
              alt=''
              fill={true}
              priority={true}
            />

            <Image
              className='hidden md:block xl:hidden object-cover'
              src='/assets/images/homepage/desktop/image-homepage-hero@2x.jpg'
              alt=''
              fill={true}
              priority={true}
            />

            <Image
              className='hidden md:hidden xl:block object-cover'
              src='/assets/images/homepage/desktop/image-homepage-hero@2x.jpg'
              alt=''
              fill={true}
              priority={true}
            />

            <div className='hero-content hidden md:block absolute bottom-0 left-0 bg-white p-12 pl-0 pb-0 max-w-[514px] lg:max-w-[445px]'>
              <h1 className='font-ibarra font-bold text-grayish-dark-blue text-[40px] leading-[42px] lg:text-[50px] lg:leading-[50px]'>
                Hey, I'm Alex Spencer and I love building beautiful websites
              </h1>

              <PrimaryBtn href={'#about-me'} classes={'mt-8 lg:mt-12'}>
                About Me
              </PrimaryBtn>
            </div>
          </figure>

          <div className='md:hidden mt-6'>
            <h1 className='font-ibarra font-bold text-grayish-dark-blue text-[40px] leading-[42px]'>
              Hey, I'm Alex Spencer and I love building beautiful websites
            </h1>

            <PrimaryBtn href={'#about-me'} classes={'mt-6'}>
              About Me
            </PrimaryBtn>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutSection />
    </main>
  );
}
