'use client';

import Image from 'next/image';

// Components
import AboutSection from '@/components/AboutSection';
import PrimaryBtn from '@/components/utils/PrimaryBtn';

export default function Home() {
  return (
    <main className='flex-grow'>
      {/* Landing Section */}
      <section className='mt-4'>
        <div className='custom-container'>
          <figure className='relative h-[271px] md:h-[600px]'>
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

            <div className='hidden md:block absolute bottom-0 left-0 bg-white p-12 pl-0 pb-0 max-w-[514px] lg:max-w-[445px]'>
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

      {/* CTA Section */}
    </main>
  );
}
