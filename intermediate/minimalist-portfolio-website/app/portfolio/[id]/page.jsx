import SecondaryBtn from '@/components/utils/SecondaryBtn';
import Image from 'next/image';

function PortfolioShowcase() {
  return (
    <main className='flex-grow'>
      <section className='custom-container mt-8'>
        {/* Hero Element */}
        <figure className=' relative h-[140px] md:h-[310px] lg:h-[500px]'>
          <Image
            className='md:hidden object-cover'
            src='/assets/images/detail/mobile/image-manage-hero@2x.jpg'
            alt=''
            fill={true}
          />

          <Image
            className='hidden md:block xl:hidden object-cover'
            src='/assets/images/detail/tablet/image-manage-hero@2x.jpg'
            alt=''
            fill={true}
          />

          <Image
            className='hidden md:hidden xl:block object-cover'
            src='/assets/images/detail/desktop/image-manage-hero@2x.jpg'
            alt=''
            fill={true}
          />
        </figure>

        <div className='lg:grid lg:grid-cols-2 lg:mt-20'>
          {/* Sidebar */}
          <aside className='border-t border-b mt-8 py-4 md:flex md:flex-wrap md:py-10 lg:flex-col lg:max-w-[380px] lg:h-fit'>
            {/* Title */}
            <h1 className='text-grayish-dark-blue font-bold font-ibarra text-[40px] md:w-1/2 lg:w-full'>
              Manage
            </h1>

            {/* Details */}
            <p className='mt-4 opacity-80 leading-[30px] md:w-1/2 lg:w-full'>
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </p>

            <div className='mt-8 md:-mt-20 lg:mt-8'>
              {/* Type of Build */}
              <p className='text-slightly-desaturated-cyan text-sm font-bold lg:text-base'>
                Interaction Design / Front End Development
              </p>

              {/* Technology Stack */}
              <p className='text-slightly-desaturated-cyan text-sm font-bold mt-4 lg:text-base'>
                HTML / CSS / JS
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
              This project was a front-end challenge from Frontend Mentor. It's
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I've learned
              something new with each project, helping me to improve and adapt
              my style.
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
                  src='/assets/images/detail/mobile/image-manage-preview-1@2x.jpg'
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden md:block object-cover'
                  src='/assets/images/detail/tablet/image-manage-preview-1@2x.jpg'
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden xl:block object-cover'
                  src='/assets/images/detail/desktop/image-manage-preview-1@2x.jpg'
                  alt=''
                  fill={true}
                />
              </figure>

              {/* Preview 2 */}
              <figure className='relative w-full h-[200px] md:h-[434px] xl:h-[400px]'>
                <Image
                  className='md:hidden object-cover'
                  src='/assets/images/detail/mobile/image-manage-preview-2@2x.jpg'
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden md:block object-cover'
                  src='/assets/images/detail/tablet/image-manage-preview-2@2x.jpg'
                  alt=''
                  fill={true}
                />

                <Image
                  className='hidden xl:block object-cover'
                  src='/assets/images/detail/desktop/image-manage-preview-2@2x.jpg'
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
