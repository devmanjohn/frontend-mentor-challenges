import PrimaryBtn from '@/components/utils/PrimaryBtn';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Landing */}
      <section>
        <div className='custom-container'>
          <figure className='relative h-[271px] md:h-[600px]'>
            <Image
              className='md:hidden object-cover'
              src='/assets/images/homepage/mobile/image-homepage-hero.jpg'
              alt=''
              fill={true}
              priority={true}
            />

            <Image
              className='hidden md:block xl:hidden object-cover'
              src='/assets/images/homepage/desktop/image-homepage-hero.jpg'
              alt=''
              fill={true}
              priority={true}
            />

            <Image
              className='hidden md:hidden xl:block object-cover'
              src='/assets/images/homepage/desktop/image-homepage-hero.jpg'
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

          <div className='md:hidden'>
            <h1 className='font-ibarra font-bold text-grayish-dark-blue text-[40px] leading-[42px]'>
              Hey, I'm Alex Spencer and I love building beautiful websites
            </h1>

            <PrimaryBtn href={'#about-me'} classes={'mt-6'}>
              About Me
            </PrimaryBtn>
          </div>
        </div>
      </section>
    </main>
  );
}
