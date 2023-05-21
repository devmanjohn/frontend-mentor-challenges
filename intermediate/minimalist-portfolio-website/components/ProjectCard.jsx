'use client';

// Imports
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Animation
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

// Components
import SecondaryBtn from '@/components/utils/SecondaryBtn';

function ProjectCard({ id, title, cover, details }) {
  const projectRef = useRef();

  useEffect(() => {
    const projectElement = projectRef.current;
    const animationSpan = projectElement.querySelector('.animation-span');
    const heading = projectElement.querySelector('.heading');
    const text = projectElement.querySelector('p');
    const button = projectElement.querySelector('a');

    let ctx = gsap.context(() => {
      let projectTl = gsap
        .timeline({
          scrollTrigger: {
            trigger: projectElement,
            start: 'top-=500 top',
          },
        })
        .fromTo(
          animationSpan,
          {
            width: '100%',
          },
          {
            width: '0%',
          }
        )
        .fromTo(
          heading,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          },
          '-=0.25'
        )
        .fromTo(
          text,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          },
          '-=0.75'
        )
        .fromTo(
          button,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          },
          '-=0.75'
        );
    });
  }, []);
  return (
    <div
      ref={projectRef}
      className='project-card md:grid md:grid-cols-2 md:items-center md:gap-16 lg:gap-32'
    >
      <figure className='relative w-full h-[288px] md:h-[314px] lg:h-[500px]'>
        <span className='animation-span w-0 h-full absolute top-0 left-0 bg-white block z-10'></span>
        <Image
          className='md:hidden object-cover'
          src={`/assets/images/portfolio/mobile/${cover}`}
          alt=''
          fill={true}
        />

        <Image
          className='hidden md:block xl:hidden object-cover'
          src={`/assets/images/portfolio/tablet/${cover}`}
          alt=''
          fill={true}
        />

        <Image
          className='hidden md:hidden xl:block object-cover'
          src={`/assets/images/portfolio/desktop/${cover}`}
          alt=''
          fill={true}
        />
      </figure>

      <div className='border-t border-b py-8 mt-8 md:mt-0 md:h-full md:flex md:flex-col md:justify-center'>
        <h2 className='heading text-grayish-dark-blue font-ibarra text-[40px] font-bold'>
          {title}
        </h2>
        <p className='opacity-80 text-grayish-dark-blue leading-[30ox] mt-4 lg:max-w-[350px]'>
          {details}
        </p>
        <SecondaryBtn classes='mt-6 md:mt-10 lg:mt-6' href={`/portfolio/${id}`}>
          View Project
        </SecondaryBtn>
      </div>
    </div>
  );
}

export default ProjectCard;
