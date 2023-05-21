'use client';

// Imports
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Components
import SecondaryBtn from '@/components/utils/SecondaryBtn';

function PortfolioShowcase({ params: { id } }) {
  const [project, setProject] = useState([]);

  const fetchProject = async () => {
    const res = await fetch(
      `https://my-json-server.typicode.com/devmanjohn/portfolio-projects-data/projects/${id}`
    );
    const data = await res.json();

    setProject(data);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <main className='flex-grow'>
      <section className='custom-container mt-8'>
        {/* Hero Element */}
        <figure className=' relative h-[140px] md:h-[310px] lg:h-[500px]'>
          <Image
            className='md:hidden object-cover'
            src={`/assets/images/detail/mobile/${project?.projectHero}`}
            alt=''
            fill={true}
          />

          <Image
            className='hidden md:block xl:hidden object-cover'
            src={`/assets/images/detail/tablet/${project?.projectHero}`}
            alt=''
            fill={true}
          />

          <Image
            className='hidden md:hidden xl:block object-cover'
            src={`/assets/images/detail/desktop/${project?.projectHero}`}
            alt=''
            fill={true}
          />
        </figure>

        <div className='lg:grid lg:grid-cols-2 lg:mt-20'>
          {/* Sidebar */}
          <aside className='border-t border-b mt-8 py-4 md:flex md:flex-wrap md:py-10 lg:flex-col lg:max-w-[380px] lg:h-fit'>
            {/* Title */}
            <h1 className='text-grayish-dark-blue font-bold font-ibarra text-[40px] md:w-1/2 lg:w-full'>
              {project?.title}
            </h1>

            {/* Details */}
            <p className='mt-4 opacity-80 leading-[30px] md:w-1/2 lg:w-full'>
              {project?.shortDescription}
            </p>

            <div className='mt-8 md:-mt-20 lg:mt-8'>
              {/* Type of Build */}
              <p className='text-slightly-desaturated-cyan text-sm font-bold lg:text-base'>
                Interaction Design / Front End Development
              </p>

              {/* Technology Stack */}
              <p className='text-slightly-desaturated-cyan text-sm font-bold mt-4 lg:text-base'>
                {project?.technologyUsed}
              </p>
              <SecondaryBtn classes={'mt-4'} href='/'>
                Visit Website
              </SecondaryBtn>
            </div>
          </aside>

          {/* Details */}
          <div className='mt-8'>
            <h2 className='text-grayish-dark-blue font-ibarra text-[32px]'>
              Project Background
            </h2>
            {/* Background */}
            <p className='mt-4 opacity-80 leading-[30px]'>
              {project?.projectBackground}
            </p>

            {/* Previews */}
            <h2 className='text-grayish-dark-blue font-ibarra text-[32px] mt-8'>
              Static Previews
            </h2>
            <div className='grid gap-8 mt-8'>
              {/* Preview 1 */}
              <figure className='relative w-full h-[200px] md:h-[434px] xl:h-[400px]'>
                <Image
                  className='md:hidden object-cover'
                  src={`/assets/images/detail/mobile/${project?.previewImage1}`}
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden md:block object-cover'
                  src={`/assets/images/detail/tablet/${project?.previewImage1}`}
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden xl:block object-cover'
                  src={`/assets/images/detail/desktop/${project?.previewImage1}`}
                  alt=''
                  fill={true}
                />
              </figure>

              {/* Preview 2 */}
              <figure className='relative w-full h-[200px] md:h-[434px] xl:h-[400px]'>
                <Image
                  className='md:hidden object-cover'
                  src={`/assets/images/detail/mobile/${project?.previewImage2}`}
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden md:block object-cover'
                  src={`/assets/images/detail/tablet/${project?.previewImage2}`}
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden xl:block object-cover'
                  src={`/assets/images/detail/desktop/${project?.previewImage2}`}
                  alt=''
                  fill={true}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PortfolioShowcase;
