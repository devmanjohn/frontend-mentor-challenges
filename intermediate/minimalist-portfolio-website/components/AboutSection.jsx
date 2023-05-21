import Image from 'next/image';
import Link from 'next/link';
import SecondaryBtn from './utils/SecondaryBtn';

function AboutSection() {
  return (
    <section id='about-me' className='mt-20 md:mt-32'>
      <div className='custom-container md:grid md:grid-cols-2 gap-20'>
        {/* Profile Picture */}
        <figure className='profile-picture relative h-[346px] md:h-[600px]'>
          <span className='animation-span w-0 h-full absolute top-0 left-0 bg-white block z-10'></span>
          <Image
            className='md:hidden object-cover'
            src='/assets/images/homepage/mobile/image-homepage-profile@2x.jpg'
            alt=''
            fill={true}
          />

          <Image
            className='hidden md:block xl:hidden object-cover'
            src='/assets/images/homepage/tablet/image-homepage-profile@2x.jpg'
            alt=''
            fill={true}
            priority={true}
          />

          <Image
            className='hidden md:hidden xl:block object-cover'
            src='/assets/images/homepage/desktop/image-homepage-profile@2x.jpg'
            alt=''
            fill={true}
            priority={true}
          />
        </figure>

        {/* Profile Content */}
        <div className='mt-10 border-t border-b md:mt-0'>
          <h2 className='mt-4 text-[40px] font-ibarra font-bold text-grayish-dark-blue lg:mt-8'>
            About Me
          </h2>
          <p className='mt-4 text-grayish-dark-blue leading-[30px] lg:max-w-[350px]'>
            I'm a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in London, UK, but I'm happy working remotely
            and have experience in remote teams. When I'm not coding, you'll
            find me outdoors. I love being out in nature whether that's going
            for a walk, run or cycling. I'd love you to check out my work.
          </p>

          <SecondaryBtn href='/portfolio' classes='mt-4 mb-10 lg:mt-8'>
            Go to portfolio
          </SecondaryBtn>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
