// Imports
import Image from 'next/image';

// Components
import SecondaryBtn from '@/components/utils/SecondaryBtn';

function ProjectCard({ id, title, cover, details }) {
  return (
    <div className='project-card md:grid md:grid-cols-2 md:items-center md:gap-16 lg:gap-32'>
      <figure className='relative w-full h-[288px] md:h-[314px] lg:h-[500px]'>
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
        <h2 className='text-grayish-dark-blue font-ibarra text-[40px] font-bold'>
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
