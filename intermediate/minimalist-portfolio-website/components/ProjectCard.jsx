// Imports
import Image from 'next/image';

// Components
import SecondaryBtn from '@/components/utils/SecondaryBtn';

function ProjectCard() {
  return (
    <div>
      <figure className='relative w-full h-[288px] md:h-[314px] lg:h-[500px]'>
        <Image
          className='md:hidden object-cover'
          src='/assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg'
          alt=''
          fill={true}
        />

        <Image
          className='hidden md:block xl:hidden object-cover'
          src='/assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg'
          alt=''
          fill={true}
        />

        <Image
          className='hidden md:hidden xl:block object-cover'
          src='/assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg'
          alt=''
          fill={true}
        />
      </figure>

      <div className='border-t border-b py-8 mt-8'>
        <h2 className='text-grayish-dark-blue font-ibarra text-[40px] font-bold'>
          Manage
        </h2>
        <p className='opacity-80 text-grayish-dark-blue leading-[30ox] mt-4'>
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <SecondaryBtn classes='mt-4' href='/portfolio/manage'>
          View Project
        </SecondaryBtn>
      </div>
    </div>
  );
}

export default ProjectCard;
